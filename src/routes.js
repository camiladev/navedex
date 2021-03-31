import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";

const isAuthenticated = false;

function PrivateRoute({ component: Component, ...rest}){
    return(
        <Route {...rest} render={ props => (
            isAuthenticated ? (
                <Component {...props} />
            ): (
                <Redirect to={{ pathname: '/', state: { from: props.location}}} />
            )
        )}

        />
    )
}

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <PrivateRoute path='/app' component={() => <h1>APP</h1>} />

            </Switch>
        </BrowserRouter>
    )
}