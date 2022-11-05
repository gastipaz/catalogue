from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_cors import CORS
from flask_session import Session
from flask_migrate import Migrate

db = SQLAlchemy()
DB_NAME = "products.db"

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = 'qwertasdfzxcv'  
    # app.config['SQLALCHEMY_DATABASE_URI']=f'sqlite:///{DB_NAME}'
    app.config['SQLALCHEMY_DATABASE_URI']="postgresql://mwxubyhjmhdthp:c8be4834d7fde9ca001ec2f58d7a8e1b2b8149cc569bad7c24ec9b2053ec9f37@ec2-176-34-215-248.eu-west-1.compute.amazonaws.com:5432/d6uemuitmqfsn1"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
    app.config['SESSION_TYPE'] = 'sqlalchemy'
    db.init_app(app)
    app.config['SESSION_SQLALCHEMY'] = db
    sess = Session()
    sess.init_app(app)
    migrate = Migrate()

    from server.website.models import ProductsTable, OrdersTable
    from server.website.views import views
    
    migrate.init_app(app, db)
    
    app.register_blueprint(views, url_prefix='/')

    create_database(app)    

    return app

def create_database(app):
    if not path.exists('website/' + DB_NAME):
        with app.app_context():
            db.create_all(app = app)