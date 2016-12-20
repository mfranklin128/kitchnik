from flask import Flask
from flask import Flask, render_template, make_response, jsonify, request

app = Flask(__name__)

import kitchnik.basic_routes
import kitchnik.api_routes
