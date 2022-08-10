import Iphone from './images/Iphone.jpg';
import HoldingPhone from './images/HoldingPhone.jpg';
import LaptopOnDesk from './images/LaptopOnDesk.jpg';
import './Homepage.css'
import { useEffect } from 'react';


function Homepage() {
    
    useEffect(() => {
        const homepageImageTransitions = setInterval(transitionBetweenImages, 3000)
        return () => clearInterval(homepageImageTransitions);
    }, []);

    function transitionBetweenImages () {

        const opacityImageOne = getComputedStyle(document.documentElement).getPropertyValue('--opacity-image-1');
        const opacityImageTwo = getComputedStyle(document.documentElement).getPropertyValue('--opacity-image-2');   
        const opacityImageThree = getComputedStyle(document.documentElement).getPropertyValue('--opacity-image-3');   
        
        if (opacityImageOne == 1) {
            document.documentElement.style.setProperty('--opacity-image-1', 0);
            document.documentElement.style.setProperty('--opacity-image-2', 1);
        } 
        
        if (opacityImageTwo == 1) {
            document.documentElement.style.setProperty('--opacity-image-2', 0);
            document.documentElement.style.setProperty('--opacity-image-3', 1);
        } 
        
        if (opacityImageThree == 1) {
            document.documentElement.style.setProperty('--opacity-image-3', 0);
            document.documentElement.style.setProperty('--opacity-image-1', 1);
        }        
    }


    return(
        <div className='flex-container'>
            <div className='title-description-container'>
                <div className='title-container'>
                    <h1 className='title'>Twitter Showcase App</h1>
                </div>
                <div className='description-container'>
                    <p className='description'>Welcome to my Twitter showcase App! Look up any tweets on the Search Page by typing in the account or content you're looking for. On the Favorite Accounts page you can click on some of the twitter accounts that I follow to randomly display their previous tweets. This web app shows off my front end development with React and Javascript, my back end development with Flask and Python, my ability to work with an external API while also sharing a glimpse of what you'd see on my personal twitter feed!</p>
                </div>
            </div>
            <div className='image-container'>
                <img className='homepage-image' src={Iphone} alt='Iphone' />  
                <img className='homepage-image-2' src={HoldingPhone} alt='Person holding an Iphone' />   
                <img className='homepage-image-3' src={LaptopOnDesk} alt='Laptop on a desk' />  
            </div>
        </div>
    );
}

export default Homepage;