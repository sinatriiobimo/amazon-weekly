import './App.css';
import React, { useEffect } from 'react';
import Home from './pages/Home/Home'
import Header from './pages/Header/Header'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'
import Payment from './pages/Payment/Payment'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from './firebase';
import {useStateValue} from './store/StateProvider'

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('The User Is >>>', authUser);
      
      if(authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
         
          <Route path="/payment">
            <Header/>
            <Payment/>
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
