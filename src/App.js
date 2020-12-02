import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './Redux/Store';
import Routes from './Routing/Routes';
import Navbar from './Components/Navbar.js';
import Cart from './Components/Cart';

import './Css/App.css';

function App() {
  return (
    <Provider store = {store} >
      <Router>
        <Cart/>
        <Navbar/>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
