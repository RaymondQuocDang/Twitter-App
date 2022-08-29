from email.policy import default
from re import search
from flask import Flask, request, send_from_directory
import requests
from requests.structures import CaseInsensitiveDict
from flask_cors import CORS, cross_origin
import os

app = Flask(__name__, static_folder='twitter-react-app/build', static_url_path='')
cors = CORS(app)

default_header = CaseInsensitiveDict()
default_header["Accept"] = "application/json"
default_header["Authorization"] = "Bearer " + os.environ['TOKEN']

@app.route('/tweets')
@cross_origin()
def search_tweets():

    search_params = request.args.get('search_params')

    url = f"https://api.twitter.com/1.1/search/tweets.json?q={search_params}&result_type=popular&count=10&tweet_mode=extended"

    resp = requests.get(url, headers=default_header)
    search_results = resp.json()['statuses']

    return {"search_results": search_results, "param": search_params}


@app.route('/usersTweets')
@cross_origin()
def search_users_tweets():

    search_params = request.args.get('search_params')
    search_params = search_params[1:]

    url = f"https://api.twitter.com/1.1/search/tweets.json?q=(from%3A{search_params})&src=typed_query&f=live&count=10&tweet_mode=extended"

    resp = requests.get(url, headers=default_header)
    search_results = resp.json()['statuses']

    return {"search_results": search_results, "param": search_params}


@app.route('/favoriteAccountsTweets')
@cross_origin()
def search_favorite_accounts_tweets():

    url = f"https://api.twitter.com/1.1/search/tweets.json?q=(from%3Anintendoamerica)&count=100&tweet_mode=extended"
    resp = requests.get(url, headers=default_header)
    nintendo_tweet_list = resp.json()['statuses']

    url = f"https://api.twitter.com/1.1/search/tweets.json?q=(from%3AMarvel)&count=100&tweet_mode=extended"
    resp = requests.get(url, headers=default_header)
    marvel_tweet_list = resp.json()['statuses']

    url = f"https://api.twitter.com/1.1/search/tweets.json?q=(from%3ANBA)&count=100&tweet_mode=extended"
    resp = requests.get(url, headers=default_header)
    nba_tweet_list = resp.json()['statuses']

    url = f"https://api.twitter.com/1.1/search/tweets.json?q=(from%3AOlympics)&count=100&tweet_mode=extended"
    resp = requests.get(url, headers=default_header)
    olympics_tweet_list = resp.json()['statuses']

    url = f"https://api.twitter.com/1.1/search/tweets.json?q=(from%3APokemon)&count=100&tweet_mode=extended"
    resp = requests.get(url, headers=default_header)
    pokemon_tweet_list = resp.json()['statuses']

    return {
        "nintendo_tweet_list": nintendo_tweet_list, 
        "marvel_tweet_list": marvel_tweet_list, 
        "nba_tweet_list": nba_tweet_list,
        "olympics_tweet_list": olympics_tweet_list, 
        "pokemon_tweet_list": pokemon_tweet_list
        }


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)   
def not_found(e):   
  return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run()
