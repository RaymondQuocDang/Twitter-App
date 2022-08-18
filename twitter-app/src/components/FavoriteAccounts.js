import './FavoriteAccounts.css';
import retweetSymbol from './images/retweet.png';
import nintendoLogo from './images/NintendoLogo.png';
import marvelLogo from './images/MarvelLogo.jpg';
import nbaLogo from './images/NbaLogo.jpg';
import olympicsLogo from './images/OlympicsLogo.jpg';
import pokemonLogo from './images/PokemonLogo.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

        let res = await axios.get('/favoriteAccountsTweets', { "signal": controller.signal })
        setFavoriteAccountsTweetList(res.data)
    }

    function displayRandomTweet(twitterAccount) {
        const arrayLength = favoriteAccountsTweetList[twitterAccount].length;
        const randomIndex = Math.floor(Math.random() * (arrayLength - 1))

        setRandomTweet((prev) => ({ ...prev, [twitterAccount]: favoriteAccountsTweetList[twitterAccount][randomIndex] }));
    }

    return (
        <div className='favorite-accounts-page'>
            <div className='header-container-fa'>
            </div>
            <div className='account-summary-tweet-container'>
                <div className='account-summary-container'>
                    <div className='account-summary-box'>
                        <img className='account-summary-pic' src={nintendoLogo} alt='Default twitter profile pic'></img>
                        <div><p className='account-summary-text'>Nintendo was a big part of my childhood. I have a switch and I still play nintendo games to this day.</p></div>
                        <button className='account-summary-button' name='nintendo_tweet_list' onClick={(e) => displayRandomTweet(e.target.name)}>Display Random Tweet</button>
                    </div>
                </div>
                <div className='tweet-wrapper-fa'>
                    {(() => {
                        if (randomTweet.nintendo_tweet_list === null) {
                            return;
                        }
                        else {
                            return (
                                <div key='0' className='tweet-flex-container'>
                                    <div className='pp-flex-container'>
                                        <div><img className='profile-pic' src={randomTweet.nintendo_tweet_list.user.profile_image_url} alt='Twitter default profile pic'></img></div>
                                    </div>
                                    <div className='content-container'>
                                        <div className='username'>{randomTweet.nintendo_tweet_list.user.name}</div>
                                        <div className='text'>{randomTweet.nintendo_tweet_list.full_text}</div>
                                        {(() => {
                                            if (randomTweet.nintendo_tweet_list.hasOwnProperty('extended_entities')) {
                                                return (<div className='media-container'><img className='media' src={randomTweet.nintendo_tweet_list.extended_entities.media[0].media_url} alt='tweet media' ></img></div>)
                                            }
                                        })()}
                                        <div className='retweet-likes-container'>
                                            <div className='retweets-container'>
                                                <img className='retweet-symbol' src={retweetSymbol} alt='Retweet symbol'></img>
                                                <p className='retweet-count'>{randomTweet.nintendo_tweet_list.retweet_count.toLocaleString('en-US')}</p>
                                            </div>
                                            <div className='likes'>♡ {randomTweet.nintendo_tweet_list.favorite_count.toLocaleString('en-US')}</div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    })()}
                </div>
            </div>
            <div className='account-summary-tweet-container'>
                <div className='tweet-wrapper-fa'>
                    {(() => {
                        if (randomTweet.marvel_tweet_list === null) {
                            return;
                        }
                        else {
                            return (
                                <div key='0' className='tweet-flex-container'>
                                    <div className='pp-flex-container'>
                                        <div><img className='profile-pic' src={randomTweet.marvel_tweet_list.user.profile_image_url} alt='Twitter default profile pic'></img></div>
                                    </div>
                                    <div className='content-container'>
                                        <div className='username'>{randomTweet.marvel_tweet_list.user.name}</div>
                                        <div className='text'>{randomTweet.marvel_tweet_list.full_text}</div>
                                        {(() => {
                                            if (randomTweet.marvel_tweet_list.hasOwnProperty('extended_entities')) {
                                                return (<div className='media-container'><img className='media' src={randomTweet.marvel_tweet_list.extended_entities.media[0].media_url} alt='tweet media' ></img></div>)
                                            }
                                        })()}
                                        <div className='retweet-likes-container'>
                                            <div className='retweets-container'>
                                                <img className='retweet-symbol' src={retweetSymbol} alt='Retweet symbol'></img>
                                                <p className='retweet-count'>{randomTweet.marvel_tweet_list.retweet_count.toLocaleString('en-US')}</p>
                                            </div>
                                            <div className='likes'>♡ {randomTweet.marvel_tweet_list.favorite_count.toLocaleString('en-US')}</div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    })()}
                </div>
                <div className='account-summary-container'>
                    <div className='account-summary-box'>
                        <img className='account-summary-pic' src={marvelLogo} alt='Default twitter profile pic'></img>
                        <div><p className='account-summary-text'>My favorite heroes are Iron man and Thor. Captain America grew on me over time too.</p></div>
                        <button className='account-summary-button' name='marvel_tweet_list' onClick={(e) => displayRandomTweet(e.target.name)}>Display Random Tweet</button>
                    </div>
                </div>
            </div>
            <div className='account-summary-tweet-container'>
                <div className='account-summary-container'>
                    <div className='account-summary-box'>
                        <img className='account-summary-pic' src={nbaLogo} alt='Default twitter profile pic'></img>
                        <div>
                            <p className='account-summary-text'>I can't play basketball for the life of me but I enjoy watching the pros. Go Raps!</p>
                            </div>
                        <button className='account-summary-button' name='nba_tweet_list' onClick={(e) => displayRandomTweet(e.target.name)}>Display Random Tweet</button>
                    </div>
                </div>
                <div className='tweet-wrapper-fa'>
                    {(() => {
                        if (randomTweet.nba_tweet_list === null) {
                            return;
                        }
                        else {
                            return (
                                <div key='0' className='tweet-flex-container'>
                                    <div className='pp-flex-container'>
                                        <div><img className='profile-pic' src={randomTweet.nba_tweet_list.user.profile_image_url} alt='Twitter default profile pic'></img></div>
                                    </div>
                                    <div className='content-container'>
                                        <div className='username'>{randomTweet.nba_tweet_list.user.name}</div>
                                        <div className='text'>{randomTweet.nba_tweet_list.full_text}</div>
                                        {(() => {
                                            if (randomTweet.nba_tweet_list.hasOwnProperty('extended_entities')) {
                                                return (<div className='media-container'><img className='media' src={randomTweet.nba_tweet_list.extended_entities.media[0].media_url} alt='tweet media' ></img></div>)
                                            }
                                        })()}
                                        <div className='retweet-likes-container'>
                                            <div className='retweets-container'>
                                                <img className='retweet-symbol' src={retweetSymbol} alt='Retweet symbol'></img>
                                                <p className='retweet-count'>{randomTweet.nba_tweet_list.retweet_count.toLocaleString('en-US')}</p>
                                            </div>
                                            <div className='likes'>♡ {randomTweet.nba_tweet_list.favorite_count.toLocaleString('en-US')}</div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    })()}
                </div>
            </div>
            <div className='account-summary-tweet-container'>
                <div className='tweet-wrapper-fa'>
                    {(() => {
                        if (randomTweet.olympics_tweet_list === null) {
                            return;
                        }
                        else {
                            return (
                                <div key='0' className='tweet-flex-container'>
                                    <div className='pp-flex-container'>
                                        <div><img className='profile-pic' src={randomTweet.olympics_tweet_list.user.profile_image_url} alt='Twitter default profile pic'></img></div>
                                    </div>
                                    <div className='content-container'>
                                        <div className='username'>{randomTweet.olympics_tweet_list.user.name}</div>
                                        <div className='text'>{randomTweet.olympics_tweet_list.full_text}</div>
                                        {(() => {
                                            if (randomTweet.olympics_tweet_list.hasOwnProperty('extended_entities')) {
                                                return (<div className='media-container'><img className='media' src={randomTweet.olympics_tweet_list.extended_entities.media[0].media_url} alt='tweet media' ></img></div>)
                                            }
                                        })()}
                                        <div className='retweet-likes-container'>
                                            <div className='retweets-container'>
                                                <img className='retweet-symbol' src={retweetSymbol} alt='Retweet symbol'></img>
                                                <p className='retweet-count'>{randomTweet.olympics_tweet_list.retweet_count.toLocaleString('en-US')}</p>
                                            </div>
                                            <div className='likes'>♡ {randomTweet.olympics_tweet_list.favorite_count.toLocaleString('en-US')}</div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    })()}
                </div>
                <div className='account-summary-container'>
                    <div className='account-summary-box'>
                        <img className='account-summary-pic' src={olympicsLogo} alt='Default twitter profile pic'></img>
                        <div><p className='account-summary-text'>Being an athlete throughout my school years has given me an appreciation for the passion and intensity that comes with competitive sports!</p></div>
                        <button className='account-summary-button' name='olympics_tweet_list' onClick={(e) => displayRandomTweet(e.target.name)}>Display Random Tweet</button>
                    </div>
                </div>
            </div>
            <div className='account-summary-tweet-container'>
                <div className='account-summary-container'>
                    <div className='account-summary-box'>
                        <img className='account-summary-pic' src={pokemonLogo} alt='Default twitter profile pic'></img>
                        <div>
                        <p className='account-summary-title'></p>
                            <p className='account-summary-text'>I used to dream of quitting school to become a pokemon master. 😂</p>
                            </div>
                        <button className='account-summary-button' name='pokemon_tweet_list' onClick={(e) => displayRandomTweet(e.target.name)}>Display Random Tweet</button>
                    </div>
                </div>
                <div className='tweet-wrapper-fa'>
                    {(() => {
                        if (randomTweet.pokemon_tweet_list === null) {
                            return;
                        }
                        else {
                            return (
                                <div key='0' className='tweet-flex-container'>
                                    <div className='pp-flex-container'>
                                        <div><img className='profile-pic' src={randomTweet.pokemon_tweet_list.user.profile_image_url} alt='Twitter default profile pic'></img></div>
                                    </div>
                                    <div className='content-container'>
                                        <div className='username'>{randomTweet.pokemon_tweet_list.user.name}</div>
                                        <div className='text'>{randomTweet.pokemon_tweet_list.full_text}</div>
                                        {(() => {
                                            if (randomTweet.pokemon_tweet_list.hasOwnProperty('extended_entities')) {
                                                return (<div className='media-container'><img className='media' src={randomTweet.pokemon_tweet_list.extended_entities.media[0].media_url} alt='tweet media' ></img></div>)
                                            }
                                        })()}
                                        <div className='retweet-likes-container'>
                                            <div className='retweets-container'>
                                                <img className='retweet-symbol' src={retweetSymbol} alt='Retweet symbol'></img>
                                                <p className='retweet-count'>{randomTweet.pokemon_tweet_list.retweet_count.toLocaleString('en-US')}</p>
                                            </div>
                                            <div className='likes'>♡ {randomTweet.pokemon_tweet_list.favorite_count.toLocaleString('en-US')}</div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    })()}
                </div>
            </div>
        </div>
    );
}

export default FavoriteAccounts;