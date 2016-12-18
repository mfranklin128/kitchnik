import logging

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return "You've found the index page!"

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)

@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return 'An internal error occurred.', 500
