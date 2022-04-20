import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import SignUp from './pages/signUp/SignUp';
import { publicRoutes, signedRoutes } from './routings/MainRoutes';

const Routing = () => {
    const isAuth = true
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                {isAuth && signedRoutes.map((route) => {
                    <Route key={route.path} exact path={route.path} component={route.component} />
                })}
                {publicRoutes.map((route) => {
                    <Route exact path={route.path} component={route.component} />
                })}
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;