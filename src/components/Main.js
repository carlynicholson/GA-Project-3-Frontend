import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'
// import Dashboard from './dashboard/Dashboard'
import Header from './header/Header'
import Footer from './Footer'
import Services from "./booking/services";
import CalendarApp from "./booking/calendar";
import Confirmation from './confirmation/Confirmation';
import About from './about/About';

export default function Main(props) {
    return (
        <>
          <Header/> 
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                {/* <Route path="/dashboard" component={Dashboard} /> */}
                <Route path="/signup" component={SignUp}/>
                <Route exact path="/services" component={Services} />
                <Route exact path="/calendar" component={CalendarApp} />
                <Route exact path="/confirmation" component={Confirmation} />
                <Route exact path="/our-team" component={About} />
                <Redirect to='/login' />
            </Switch>
            <Footer/>
        </>
    );
};
