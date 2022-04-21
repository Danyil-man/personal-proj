import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import SignUp from './pages/signUp/SignUp';
import { publicRoutes, signedRoutes } from './routings/MainRoutes';

const Routing = () => {
    const isAuth = false

    return (
        <Router>
            <Header />
            <Routes>
                {isAuth && signedRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                )

                )}
                {publicRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}


            </Routes>
        </Router>
    )
}

export default Routing;