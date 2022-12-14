import './App.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import FavoriteAccounts from './components/FavoriteAccounts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className='app'>
      <div>
        <NavBar/>
      </div>
      <div className='routes-container'>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/search-page' element={<SearchPage/>} />
          <Route exact path='/favorite-accounts' element={<FavoriteAccounts/>} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
