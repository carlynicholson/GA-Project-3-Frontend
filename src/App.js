import React, {useState,useContext} from 'react';

import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/SignUp'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Home from './components/Home'
import Main from './components/Main'
import axios from 'axios'

export const AppContext = React.createContext()

function App() { 
  const [loggedIn, setLoggedIn] =useState({
  loggedInStatus: "NOT_LOGGED_IN",
  user:{}
})  

const checkLoginStatus = () => {
  axios.get("http://localhost:5150/logged_in",{
    withCredentials: true
  }).then(response =>{
    console.log('logged in?', response)
    if(response.data.logged_in && loggedIn.loggedInStatus==="NOT_LOGGED_IN"){
      setLoggedIn({
        loggedInStatus: "LOGGED_IN",
        user: response.data.user
      })
    } else if(!response.data.logged_in && loggedIn.loggedInStatus==="LOGGED_IN"){
      setLoggedIn({
        loggedInStatus: "NOT_LOGGED_IN",
        user:{}
      })
    }
  }).catch(error =>{
    console.log('login error', error)
  }) //need this from backend
}
function handleLogin (data){
  console.log('App-handleLogin', data)
  setLoggedIn({
    loggedInStatus: "LOGGED_IN",
    user: data
  })
  console.log('useState',loggedIn)
}

function componentDidMount(){
  checkLoginStatus()
}
  return (
    <div className="App">
      <AppContext.Provider>
        <Header />
        <Main />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
