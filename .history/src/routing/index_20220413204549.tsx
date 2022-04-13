import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../components/header/Header";
import Home from "../pages/home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;