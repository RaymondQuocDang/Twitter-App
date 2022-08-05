import './NavBar.css'
function NavBar({setVisibleComponent}) {

    return(
        <ul className='nav-bar'>
            <li className='nav-button'><p onClick={() => setVisibleComponent('Homepage')}>Home</p></li>
            <li className='nav-button'><p onClick={() => setVisibleComponent('SearchTweet')}>Search</p></li>
            <li className='nav-button'><p onClick={() => setVisibleComponent('RandomTweet')}>Random</p></li>
        </ul>
    );
}

export default NavBar;