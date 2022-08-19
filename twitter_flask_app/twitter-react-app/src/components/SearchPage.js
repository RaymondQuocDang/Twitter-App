import './SearchPage.css'
import retweetSymbol from './images/retweet.png'
import { useState } from 'react';
import axios from 'axios';
import WarningButton from './WarningButton';


function SearchPage() {

    const [tweets, setTweets] = useState([]);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);

    function searchForTweets() {

        if (search === '') {
            return;
        }

        if (search[0] === '@') {
            searchTweetsWithUser();
        } else {
            searchTweetsWithContent();
        }
    }

    async function searchTweetsWithContent() {
        try {
            let res = await axios.get('/tweets', { params: { 'search_params': search } })

            if (res.data.search_results.length === 0) {
                setShow(true);
                return;
            }

            setTweets(res.data.search_results);

        } catch (err) {
            if (err.response) {
                setShow(true);
            }
        }
    }

    async function searchTweetsWithUser() {
        try {
            let res = await axios.get('/usersTweets', { params: { 'search_params': search } })

            if (res.data.search_results.length === 0) {
                setShow(true);
                return;
            }

            setTweets(res.data.search_results);

        } catch (err) {
            if (err.response) {
                setShow(true);
            }
        }
    }


    function displaySearchedTweets() {

        let tweetList = []

        tweets.map((tweet, i) => {
            tweetList.push(

                <div key={i} className='tweet-flex-container-sp'>
                    <div className='pp-flex-container'>
                        <div><img className='profile-pic' src={tweet.user.profile_image_url} alt='Twitter default profile pic'></img></div>
                    </div>
                    <div className='content-container'>
                        <div className='username'>{tweet.user.name}</div>
                        <div className='text'>{tweet.full_text}</div>
                        {(() => {
                            if (tweet.hasOwnProperty('extended_entities')) {
                                if (tweet.extended_entities.media[0].type === 'video') {
                                    return (<div className='media-container'><video className='media' src={tweet.extended_entities.media[0].video_info.variants[0].url}></video></div>)
                                }
                                return (<div className='media-container'><img className='media' src={tweet.extended_entities.media[0].media_url} alt='tweet media' ></img></div>)
                            }
                        })()}
                        <div className='retweet-likes-container'>
                            <div className='retweets-container'>
                                <img className='retweet-symbol' src={retweetSymbol} alt='Retweet symbol'></img>
                                <p className='retweet-count'>{tweet.retweet_count.toLocaleString('en-US')}</p>
                            </div>
                            <div className='likes'>♡ {tweet.favorite_count.toLocaleString('en-US')}</div>
                        </div>
                    </div>
                </div>
            )
        })

        return tweetList
    }

    const tweetList = displaySearchedTweets();

    return (
        <div className='search-page'>
            <WarningButton setShow={setShow} show={show} />
            <div className='search-box-container'>
                <div className="search-box">
                    <button className="btn-search" onClick={() => searchForTweets()}><p>🔍</p></button>
                    <input type="text" className="input-search" placeholder="Type to Search..." onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className='tweet-wrapper-sp'>
                {tweetList}
            </div>

        </div>

    );
}

export default SearchPage;


