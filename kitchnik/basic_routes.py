from flask import Flask, render_template, make_response, jsonify, request

from kitchnik import app

@app.route('/')
def index():
    return "You've found the index page!"

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)
