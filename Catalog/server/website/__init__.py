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
    app.config['SQLALCHEMY_DATABASE_URI']=f'sqlite:///{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
    app.config['SESSION_TYPE'] = 'sqlalchemy'
    db.init_app(app)
    app.config['SESSION_SQLALCHEMY'] = db
    sess = Session()
    sess.init_app(app)
    migrate = Migrate()

    from website import models
    from website.views import views
    
    migrate.init_app(app, db)
    
    app.register_blueprint(views, url_prefix='/')

    create_database(app)    

    return app

def create_database(app):
    if not path.exists('website/' + DB_NAME):
        with app.app_context():
            db.create_all(app = app)