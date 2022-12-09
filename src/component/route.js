import React from 'react';
import { Redirect, Switch, Route, Router } from "react-router-dom";

//history
import { history } from '../helpers/history';

//pages
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import RouteGuard from './RouteGuard';

function Routes() {
    console.log(">>history: ", history)
    return (
        <Router history={history}>
            <Switch>
                <RouteGuard exact path="/">
                    <HomePage/>
                </RouteGuard>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Routes