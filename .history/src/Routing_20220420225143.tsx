import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import SignUp from './pages/signUp/SignUp';
import { publicRoutes, signedRoutes } from './routings/MainRoutes';

const Routing = () => {
    const isAuth = false
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {isAuth && signedRoutes.map(({ path, Component }) => {
                    <Route exact path={path} component={Component} />
                })}
                {publicRoutes.map(({ path, Component }) => {
                    <Route path={path} component={Component} />
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;