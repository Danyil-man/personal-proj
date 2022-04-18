import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import SignUp from './pages/sign-up/SignUp';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={SignUp} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;