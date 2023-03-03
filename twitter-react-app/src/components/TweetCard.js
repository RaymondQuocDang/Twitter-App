import retweetSymbol from './images/retweet.png';

function TweetCard({ tweetList }) {
    return (
        <div key='0' className='tweet-flex-container'>
            <div className='pp-flex-container'>
                <div><img className='profile-pic' src={tweetList.user.profile_image_url} alt='Twitter default profile pic'></img></div>
            </div>
            <div className='content-container'>
                <div className='username'>{tweetList.user.name}</div>
                <div className='text'>{tweetList.full_text}</div>
                {(() => {
                    if (tweetList.hasOwnProperty('extended_entities')) {
                        return (<div className='media-container'><img className='media' src={tweetList.extended_entities.media[0].media_url} alt='tweet media' ></img></div>)
                    }
                })()}
                <div className='retweet-likes-container'>
                    <div className='retweets-container'>
                        <img className='retweet-symbol' src={retweetSymbol} alt='Retweet symbol'></img>
                        <p className='retweet-count'>{tweetList.retweet_count.toLocaleString('en-US')}</p>
                    </div>
                    <div className='likes'>♡ {tweetList.favorite_count.toLocaleString('en-US')}</div>
                </div>
            </div>
        </div>
    );
}

export default TweetCard;