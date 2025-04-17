from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy # type: ignore



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///autoguide.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from . import views
from . import models