from .__init__ import db
from sqlalchemy import event
from ast import literal_eval
import json
from sqlalchemy.sql import func
from datetime import datetime

class ProductsTable(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    image = db.Column(db.String(300))
    price = db.Column(db.Float())
    discount = db.Column(db.Integer)
    stock = db.Column(db.Integer)
    description = db.Column(db.String(10000))
    details = db.Column(db.String(10000))
    category = db.Column(db.String(150))
    subcategory = db.Column(db.String(150))
    orders = db.relationship('OrdersTable')

    def dict_format(self):
        return {"id": self.id, 
                "name": self.name, 
                "price": self.price, 
                "discount": self.discount,
                "image": self.image, 
                "description": self.description, 
                "details": literal_eval(self.details), 
                "category": self.category, 
                "subcategory": self.subcategory, 
                "stock": self.stock}
    
    @classmethod
    def retrieve_product_by_id(cls, product_id):
        product=cls.query.filter(cls.id == product_id).first()
        return {"id": product.id, 
                "name": product.name, 
                "price": product.price, 
                "discount": product.discount,
                "image": product.image, 
                "description": product.description, 
                "details": literal_eval(product.details), 
                "category": product.category, 
                "subcategory": product.subcategory, 
                "stock": product.stock}

    @classmethod
    def update_stock(cls, product_id, quantity):
        product = cls.query.filter(cls.id == product_id).first()
        product.stock = product.stock - int(quantity)
        db.session.commit()

class OrdersTable(db.Model):
    order_id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products_table.id'))
    email = db.Column(db.String(150))
    user_name = db.Column(db.String(150))
    user_address = db.Column(db.String(1000))
    card_number = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    date = db.Column(db.DateTime, default=func.now())

    @classmethod
    def generate_order(cls, payment_info, product_info):
        orders_id = []
        for product in product_info:
            id=product["id"]
            quantity=product["quantity"]
            email=payment_info["email"]
            name=payment_info["name"]
            address=f"{payment_info['address']}, {payment_info['city']}, {payment_info['state']}, {payment_info['zip']}, {payment_info['country']}"
            card_number=payment_info["cardnumber"]
            if id == "" or quantity == "":
                return "Product information missing"
            else:
                new_order = cls(product_id=id, email=email, user_name=name, user_address=address, card_number=card_number, quantity=quantity, date=datetime.now())
                db.session.add(new_order)
                db.session.commit()
                ProductsTable.update_stock(id, quantity)
                orders_id.append(new_order.order_id)
        return orders_id

@event.listens_for(ProductsTable.__table__, 'after_create')
def insert_data(*args, **kwargs):
    with open('client/src/components/assets/data/products.json', encoding="mbcs") as products:
        data = json.load(products)

    for value in data:
        name = value.get('name')
        image = value.get('image')
        price = value.get('price')
        stock = value.get('stock')
        description = value.get('description')
        details = value.get('details')
        category = value.get('category')
        subcategory = value.get('subcategory')
        discount = value.get('discount')

        product = ProductsTable(name=name, image=image, price=price, discount=discount, stock=stock, description=description, details=str(details), category=category, subcategory=subcategory)
        db.session.add(product)
        db.session.commit()
