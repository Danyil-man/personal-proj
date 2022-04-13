import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing;