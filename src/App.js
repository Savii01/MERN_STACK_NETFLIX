import './App.scss';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import WatchPage from './pages/WatchPage/WatchPage';

import {  BrowserRouter as Router,  Route, Routes, Navigate} from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route exact path = '/' element= {user ? <Home/> : <Navigate replace to= '/register'/>}/>
          <Route exact path = '/register' element= {!user ? <Register/> : <Navigate replace to= '/'/>}/>
          <Route exact path = '/login' element= {!user ? <Login/> : <Navigate replace to= '/'/>}/>
          {user && (
            <>
              <Route exact path = '/' element= {<Home/>}/>
              <Route path = '/movies' element= {<Home type = 'movies'/>}/>
              <Route path = '/series' element= {<Home type = 'series'/>}/>
              <Route path = '/watch' element= {<WatchPage/>}/> 
            </>  
          )}
      </Routes>
    </Router>
            
    </div>
  );
}

export default App;
