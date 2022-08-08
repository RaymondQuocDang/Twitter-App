import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {

    return(
        <div className='nav-bar-wrapper'>
            <ul className='nav-bar'>
                <li className='nav-button'><Link className='nav-button-link' to='/'>HOMEPAGE</Link></li>
                <li className='nav-button'><Link className='nav-button-link' to='/search-page'>SEARCH PAGE</Link></li>
                <li className='nav-button'><Link className='nav-button-link' to='/favorite-accounts'>FAVORITE ACCOUNTS</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;