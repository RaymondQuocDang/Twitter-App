import './FavoriteAccounts.css';
import retweetSymbol from './images/retweet.png'
import twitterProfilePic from './images/TwitterProfilePic.png'

function FavoriteAccounts() {
    return(
        <div className='favorite-accounts-page'>
            <div className='header-container-fa'>
            </div>    
            <div className='account-summary-tweet-container'>
                <div className='account-summary-container'>
                    <div className='account-summary-box'>
                        <img className='account-summary-pic' src={twitterProfilePic} alt='Default twitter profile pic'></img>
                        <div><p className='account-summary-text'>A description of the profile will go here.</p></div>
                        <button className='account-summary-button'>Display Tweet</button>
                    </div>
                </div>
                <div className='tweet-wrapper-fa'>
                    <div className='tweet-flex-container-fa'>
                        <div className='pp-flex-container'>
                            <div><img className='profile-pic' src={twitterProfilePic} alt='Default twitter profile pic'></img></div>
                        </div>
                        <div className='content-container'> 
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

            <div className='account-summary-tweet-container'>
                <div className='tweet-wrapper-fa'>
                    <div className='tweet-flex-container-fa'>
                        <div className='pp-flex-container'>
                            <div><img className='profile-pic' src={twitterProfilePic} alt='Default twitter profile pic'></img></div>
                        </div>
                        <div className='content-container'> 
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
                <div className='account-summary-container'>
                    <div className='account-summary-box'></div>
                </div>
            </div>

        </div>
    );
}

export default FavoriteAccounts;