import React from "react";
import {Route, Switch, Redirect} from "react-router";
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard'

export default function Main() {
    return (
        <Switch>
            <Route exact path="/" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Redirect to={'/'} />
        </Switch>
    );
}