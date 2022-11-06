from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
from flask_cors import CORS

db = SQLAlchemy()
DB_NAME = "products.db"

def create_app():
    secret_key = os.getenv("SECRET_KEY")
    uri = os.getenv("DATABASE_URL")
    if uri.startswith("postgres://"):
        uri = uri.replace("postgres://", "postgresql://", 1)

    app = Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = secret_key  
    app.config['SQLALCHEMY_DATABASE_URI'] = uri

    # On a development environment this should be the local database URI
    # app.config['SQLALCHEMY_DATABASE_URI']=f'sqlite:///{DB_NAME}'

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
    db.init_app(app)

    from server.website.views import views
    
    app.register_blueprint(views, url_prefix='/')
    from server.website.models import ProductsTable, OrdersTable

    create_database(app)    

    return app

def create_database(app):
    #This line avoids recreating the database if it already exists on a development environment
    # if not path.exists('website/' + DB_NAME):
    with app.app_context():
        db.create_all(app = app)