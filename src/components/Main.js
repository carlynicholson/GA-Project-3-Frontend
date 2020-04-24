import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './authentication/Login'
import SignUp from './authentication/SignUp'
import Dashboard from './Dashboard'
// import Header from './header/Header'
import Menu from './menu/Menu'
import Footer from './Footer'
import Services from "./booking/services";
import CalendarApp from "./booking/calendar";
import Confirmation from './confirmation/Confirmation';
import About from './about/About';

export default function Main(props) {
    return (
        <>
          <Menu/> 
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
