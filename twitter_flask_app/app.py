from flask import Flask
from flask_restful import Api, Resource, reqparse
import requests
from requests.structures import CaseInsensitiveDict

app = Flask(__name__)
api = Api(app)

url = "https://api.twitter.com/1.1/search/tweets.json?q=tesla&result_type=popular&count=10&tweet_mode=extended"

headers = CaseInsensitiveDict()
headers["Accept"] = "application/json"
headers["Authorization"] = "Bearer AAAAAAAAAAAAAAAAAAAAAP5tfwEAAAAA44hCCBXctkQ6x%2FznD4X1l98X2oo%3D41z2gIQv7qgOJZ2TPJtYVS5y1EVJp6Y95KSCXEj30ZNfiUnFnv"


resp = requests.get(url, headers=headers)

data = resp.json()['statuses']

for i in range(10):
    print(data[i]['user']['name'])
    print(data[i]['retweet_count'])
    print(data[i]['favorite_count'])
    print(data[i]['full_text'])
    print('')

def index():


    return '<h1>Hello</h1>'
