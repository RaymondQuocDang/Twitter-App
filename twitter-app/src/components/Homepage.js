import Iphone from './images/Iphone.jpg';
import './Homepage.css'

function Homepage() {
    
    return(
        <div className='flex-container'>
            <div className='title-description-container'>
                <div className='title-container'>
                    <h1 className='title'>Twitter Showcase App</h1>
                </div>
                <div className='description-container'>
                    <p className='description'>Welcome to my Twitter showcase App! Look up any tweets on the Search Page by typing in the account or content you're looking for. On the Favorite Accounts page you can click on some of the twitter accounts that I follow to randomly display their previous tweets. This web app shows off my front end development with React, my back end development with flask, my ability to work with an external API while also sharing a glimpse of what you'd see on my personal twitter feed!</p>
                </div>
            </div>
            <div className='dot-image-container'>
                <div className='dot-container'>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div className='image-container'>
                    <img className='homepage-image' src={Iphone} alt='Three rotating images. Iphone, laptop and person holding phone.' />  
                </div>
            </div>
        </div>
    );
}

export default Homepage;