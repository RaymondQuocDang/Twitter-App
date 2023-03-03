import './FavoriteAccounts.css';
import nintendoLogo from './images/NintendoLogo.png';
import marvelLogo from './images/MarvelLogo.jpg';
import nbaLogo from './images/NbaLogo.jpg';
import olympicsLogo from './images/OlympicsLogo.jpg';
import pokemonLogo from './images/PokemonLogo.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TweetCard from './TweetCard.js'
import AccountSummaryCard from './AccountSummaryCard';

function FavoriteAccounts() {

    const [favoriteAccountsTweetList, setFavoriteAccountsTweetList] = useState({});
    const [randomTweet, setRandomTweet] = useState({
        'nintendo_tweet_list': null,
        'marvel_tweet_list': null,
        'nba_tweet_list': null,
        'olympics_tweet_list': null,
        'pokemon_tweet_list': null
    })

    useEffect(() => {

        const controller = new AbortController();
        retrieveFavoriteAccountTweets(controller)

        return () => controller.abort()
    }, []);

    async function retrieveFavoriteAccountTweets(controller) {

        let res = await axios.get('/tweets/favorite-accounts', { "signal": controller.signal })
        setFavoriteAccountsTweetList(res.data)
    }

    function generateRandomTweet(twitterAccount) {
        const arrayLength = favoriteAccountsTweetList[twitterAccount].length;
        const randomIndex = Math.floor(Math.random() * (arrayLength - 1))

        setRandomTweet((prev) => ({ ...prev, [twitterAccount]: favoriteAccountsTweetList[twitterAccount][randomIndex] }));
    }

    function showTweetCard(tweetList) {
        if (tweetList === null) {
            return;
        }
        else {
            return (<TweetCard tweetList={tweetList} />)
        }

    }

    return (
        <div className='favorite-accounts-page'>
            <div className='header-container-fa'>
            </div>
            <div className='account-summary-tweet-container'>
                <AccountSummaryCard generateRandomTweet={generateRandomTweet} logo={nintendoLogo} text={'Nintendo was a big part of my childhood. I have a switch and I still play nintendo games to this day.'} name={'nintendo_tweet_list'} />
                <div className='tweet-wrapper-fa'>
                    {showTweetCard(randomTweet.nintendo_tweet_list)}
                </div>
            </div>
            <div className='account-summary-tweet-container'>
                <div className='tweet-wrapper-fa'>
                    {showTweetCard(randomTweet.marvel_tweet_list)}
                </div>
                <AccountSummaryCard generateRandomTweet={generateRandomTweet} logo={marvelLogo} text={'My favorite heroes are Iron man and Thor. Captain America grew on me over time too.'} name={'marvel_tweet_list'} />
            </div>
            <div className='account-summary-tweet-container'>
                <AccountSummaryCard generateRandomTweet={generateRandomTweet} logo={nbaLogo} text={"I can't play basketball for the life of me but I enjoy watching the pros. Go Raps!"} name={'nba_tweet_list'} />
                <div className='tweet-wrapper-fa'>
                    {showTweetCard(randomTweet.nba_tweet_list)}
                </div>
            </div>
            <div className='account-summary-tweet-container'>
                <div className='tweet-wrapper-fa'>
                    {showTweetCard(randomTweet.olympics_tweet_list)}
                </div>
                <AccountSummaryCard generateRandomTweet={generateRandomTweet} logo={olympicsLogo} text={"Being an athlete throughout my school years has given me an appreciation for the passion and intensity that comes with competitive sports!"} name={'olympics_tweet_list'} />
            </div>
            <div className='account-summary-tweet-container'>
                <AccountSummaryCard generateRandomTweet={generateRandomTweet} logo={pokemonLogo} text={"I used to dream of quitting school to become a pokemon master. 😂"} name={'pokemon_tweet_list'} />
                <div className='tweet-wrapper-fa'>
                    {showTweetCard(randomTweet.pokemon_tweet_list)}
                </div>
            </div>
        </div>
    );
}

export default FavoriteAccounts;