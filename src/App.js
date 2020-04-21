import React, {useState,useContext} from 'react';
import  {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/SignUp'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Home from './components/Home'
<<<<<<< HEAD
import axios from 'axios'
=======
>>>>>>> 3257515ae64616f5d6a14c2508cf2c75f463d0d4


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
        <Header />
        <Switch>
<<<<<<< HEAD
            <Route 
              exact path="/" 
              render={props => (
                <Home 
                  {...props} 
                  handleLogin={handleLogin} 
                  loggedInStatus={loggedIn.loggedInStatus}/>
                )} 
            />
            {/* <Route path="/login" component={Login} /> 
            <Route path="/signup" component={Signup} /> */}
            <Route 
              exact path="/dashboard" 
              render={props => (
                <Dashboard 
                  {...props} 
                  loggedIn={loggedIn.user}/>
              )} 
            />
            <Route exact path="/login" component= {Login} />
            <Redirect exact to="/"/>
=======
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" render={routerProps => <Dashboard match={routerProps}/>}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/"/>
>>>>>>> 3257515ae64616f5d6a14c2508cf2c75f463d0d4
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
