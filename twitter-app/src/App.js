import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import SearchTweet from './components/SearchTweet';
import RandomTweet from './components/RandomTweet';
import {useState} from 'react';

function App() {

const [visibleComponent, setVisibleComponent] = useState('Homepage')  


  return (
    <div>
      <NavBar 
        setVisibleComponent={setVisibleComponent}
      />
      {visibleComponent === 'Homepage' ? <Homepage /> : null}
      {visibleComponent === 'SearchTweet' ? <SearchTweet /> : null}
      {visibleComponent === 'RandomTweet' ? <RandomTweet /> : null}
    </div>
  );
}

export default App;
