import './SearchPage.css'
import retweetSymbol from './images/retweet.png'
import twitterProfilePic from './images/TwitterProfilePic.png'

function SearchPage() {
    return(
        <div className='search-page'>
            <div className='search-box-container'>
                <div className="search-box">
                    <button className="btn-search"><p>🔍</p></button>
                    <input type="text" className="input-search" placeholder="Type to Search..." />
                </div>
            </div>
            <div className='profile-wrapper'>
                <div className='tweet-flex-container'>
                    <div className='pp-flex-container'>
                        <div><img className='profile-pic' src={twitterProfilePic}></img></div>
                    </div>
                    <div className='content-flex-container'> 
                        <div className='username'>Username</div>
                        <div className='text'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</div>
                        <div className='media'>Media</div>
                        <div className='retweet-likes-container'>
                            <div className='retweets-container'>
                                <img className='retweet-symbol' src={retweetSymbol} alt='Retweet symbol'></img>
                                <p>0</p>    
                            </div>
                            <div className='likes'>❤ 0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default SearchPage;