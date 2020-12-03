import './App.css';
import React from 'react';
import Home from './pages/Home/Home'
import Header from './pages/Header/Header'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
