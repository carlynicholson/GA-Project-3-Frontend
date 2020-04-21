import React from "react";
import {Route, Switch, Redirect} from "react-router";

export default function Main() {
    return (
        <Switch>
            <Redirect to={'/'} />
        </Switch>
    );
}