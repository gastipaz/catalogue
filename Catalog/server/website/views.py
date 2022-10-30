from flask import Blueprint, jsonify, request
from website.models import OrdersTable, ProductsTable
from ast import literal_eval
from flask_cors import cross_origin
import operator

views = Blueprint('views', __name__)
products_database = ProductsTable
orders_database = OrdersTable

@views.route("/withDiscount", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_discounted():
    products = products_database.query.filter(products_database.discount > 0).all()
    discount_products = [product.dict_format() for product in products]
    sorted_list = sorted(discount_products,key=operator.itemgetter("category"), reverse=False)
    return {'discounts':sorted_list}

@views.route("/catalog", methods=["GET", "POST"])
@cross_origin(supports_credentials=True)
def catalog():
    products = products_database.query.all()
    catalog = get_catalog_info(products)
    return jsonify(products=catalog["products"], categories=catalog["categories"], subcategories=catalog["subcategories"])

@views.route("/product/<product_id>", methods=["GET"])
@cross_origin(supports_credentials=True)
def product(product_id):
    product = products_database.retrieve_product_by_id(product_id)
    return jsonify(product=product)

@views.route("/cart/success", methods=["POST"])
@cross_origin(supports_credentials=True)
def new_order():
    data = request.get_json()
    purchase_data = data.get("purchase_data")
    products_data = data.get("products_data")
    if products_data is None or purchase_data is None:
        return {"orders":"Order information missing"}
    else:
        orders = orders_database.generate_order(purchase_data, products_data)
    if isinstance(orders, str):
        return {"orders": orders}
    else:
        last_orders = []
        for id in orders:
            order = orders_database.query.filter(orders_database.order_id == id).first()
            ordered_product = products_database.retrieve_product_by_id(order.product_id)
            print(ordered_product)
            total_amount = ordered_product["price"] - ((ordered_product["price"] * ordered_product["discount"]) / 100) if ordered_product["discount"] is not None else ordered_product["price"]
            last_orders.append({"order_id":order.order_id, "product_id":order.product_id, "quantity":order.quantity, "amount":total_amount * order.quantity, "product":ordered_product})
    return {"orders":last_orders}

@views.route("/mostPopular", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_most_popular():
    products = products_database.query.all()
    orders_list = [{"id":product.id,"orders":len(product.orders)} for product in products if len(product.orders) > 0]
    sorted_list = sorted(orders_list,key=operator.itemgetter("orders", "id"), reverse=True)
    final = {item["id"]:item["orders"] for item in sorted_list[:5]}
    return {'orders':final}

def get_catalog_info(products_array):
    products_list = []
    categories_list = list(dict.fromkeys([product.category for product in products_array]))
    subcategories = []
    for product in products_array:
        product_dict = {"id": product.id, 
                        "name": product.name, 
                        "price": product.price, 
                        "discount": product.discount,
                        "image": product.image,
                        "description": product.description, 
                        "details": literal_eval(product.details), 
                        "category": product.category, 
                        "subcategory": product.subcategory,
                        "stock": product.stock}
        products_list.append(product_dict)
    for category in categories_list: 
        filtered_by_category = ProductsTable.query.filter_by(category=category)
        subcategories_dict = {category: list(dict.fromkeys([product.subcategory for product in filtered_by_category if product in products_array]))}
        subcategories.append(subcategories_dict)
    return {"products":products_list, "categories":categories_list, "subcategories":subcategories}
