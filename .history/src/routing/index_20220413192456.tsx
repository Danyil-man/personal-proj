import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../pages/home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/a' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;