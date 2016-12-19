from flask import Flask
from flask import Flask, render_template, make_response, jsonify, request

app = Flask(__name__)

import kitchnik.basic_routes
import kitchnik.api_routes

#
# import logging
#
# from flask import Flask, render_template, make_response, jsonify, request
# import kitchnik_api
#
# app = Flask(__name__)
#
# @app.route('/')
# def index():
#     return "You've found the index page!"
#
# @app.route('/hello/')
# @app.route('/hello/<name>')
# def hello(name=None):
#     return render_template('hello.html', name=name)
#
# # error handling
# @app.errorhandler(500)
# def server_error(e):
#     logging.exception('An error occurred during a request.')
#     return 'An internal error occurred.', 500
