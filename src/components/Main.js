import React from "react";
import {Route, Switch, Redirect} from "react-router";
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Header from './Header'
import Footer from './Footer'

export default function Main(props) {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/signup" component={SignUp} />
                <Redirect to={'/login'} />
            </Switch>
            <Footer />
        </>
    );
}