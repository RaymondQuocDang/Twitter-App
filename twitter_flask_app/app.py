from flask import Flask, request
from flask_restful import Api
import requests
from requests.structures import CaseInsensitiveDict
import time

app = Flask(__name__)
api = Api(app)

@app.route('/tweets')
def search_tweets():

    search_params = request.args.get('search_params')

    url = f"https://api.twitter.com/1.1/search/tweets.json?q={search_params}&result_type=popular&count=10&tweet_mode=extended"

    headers = CaseInsensitiveDict()
    headers["Accept"] = "application/json"
    headers["Authorization"] = "Bearer AAAAAAAAAAAAAAAAAAAAAP5tfwEAAAAA44hCCBXctkQ6x%2FznD4X1l98X2oo%3D41z2gIQv7qgOJZ2TPJtYVS5y1EVJp6Y95KSCXEj30ZNfiUnFnv"

    resp = requests.get(url, headers=headers)
    search_results = resp.json()['statuses']

    return {"search_results": search_results, "param": search_params}


@app.route('/usersTweets')
def search_users_tweets():

    search_params = request.args.get('search_params')

    url = f"https://api.twitter.com/1.1/search/tweets.json?q=(from%3Aelonmusk)&src=typed_query&f=live&count=10&tweet_mode=extended"

    headers = CaseInsensitiveDict()
    headers["Accept"] = "application/json"
    headers["Authorization"] = "Bearer AAAAAAAAAAAAAAAAAAAAAP5tfwEAAAAA44hCCBXctkQ6x%2FznD4X1l98X2oo%3D41z2gIQv7qgOJZ2TPJtYVS5y1EVJp6Y95KSCXEj30ZNfiUnFnv"

    resp = requests.get(url, headers=headers)
    search_results = resp.json()['statuses']

    return {"search_results": search_results, "param": search_params}


if __name__ == "__main__":
    app.run(debug=True)