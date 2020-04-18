import React, {useState} from 'react';
import  {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/SignUp'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import axios from 'axios'


function App() {
  const [loggedIn, setLoggedIn] =useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user:{}

  })

  function checkLoginStatus(){
    axios.get("http://localhost:3000/logged_in",{
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
    setLoggedIn({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  function componentDidMount(){
    checkLoginStatus()
  }

  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" 
              render={props => (
                <Home {...props} handleLogin={handleLogin} loggedInStatus={loggedIn.loggedInStatus}/>
              )} 
              />
            <Route path="/login" component={Login} /> 
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" render={props => (
                <Dashboard {...props} loggedInStatus={loggedIn.loggedInStatus}/>
              )} 
              />
            <Redirect to="/login"/>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
