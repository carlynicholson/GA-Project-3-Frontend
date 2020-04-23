import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Header from './Header'
import Footer from './Footer'
import Services from "./booking/services";
import CalendarApp from "./booking/calendar";
import Providers from "./booking/providers/providers";
import Confirmation from './confirmation/Confirmation';


export default function Main(props) {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/signup" component={SignUp}/>
                <Route exact path="/localproviders" component={Providers}/>
                <Route exact path="/services" component={Services}/>
                <Route exact path="/calendar" component={CalendarApp}/>
                <Route exact path="/confirmation" component={Confirmation}/>
                <Redirect to='/login'/>
            </Switch>
            <Footer/>
        </>
    );
};
