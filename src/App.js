import React, {useState} from 'react';
import  {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/SignUp'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Home from './components/Home'


function App() {
  
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" render={routerProps => <Dashboard match={routerProps}/>}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect to="/"/>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
