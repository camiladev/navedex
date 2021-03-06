import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Listing from './pages/private/Listing'
import Create from './pages/private/Create'
import Edit from './pages/private/Edit'
import { NaverProvider } from "./contexts/NaverContext";


function PrivateRoute({ component: Component, ...rest}){
    const { isAuthenticated } = useContext(AuthContext)

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
            <NaverProvider>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <PrivateRoute path='/navers' component={Listing} />
                    <PrivateRoute path='/createnaver' component={Create} />
                    <PrivateRoute path='/editnaver' component={Edit} />
                </Switch>

            </NaverProvider>
        </BrowserRouter>
    )
}