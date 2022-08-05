import Lucina from './LucinaButterfly.png';
import './Homepage.css'

function Homepage() {
    
    return(
        <div>
            <div>
                <p> Some description or some some</p>
            </div>
            <div>
                <img className='home-page-image' src={Lucina} alt='Lucina from FE Awakening' />  
            </div>
        </div>
    );
}

export default Homepage;