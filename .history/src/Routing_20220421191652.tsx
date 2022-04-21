import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/error/Error';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import SignUp from './pages/signUp/Auth';
import { publicRoutes, signedRoutes } from './routings/MainRoutes';

const Routing = () => {
    const isAuth = true

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

                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    )
}

export default Routing;