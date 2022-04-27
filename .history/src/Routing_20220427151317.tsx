import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/common/error/Error';
import Header from './components/header/Header';
import Auth from './pages/signUp/Auth';
import { publicRoutes, signedRoutes } from './routings/MainRoutes';
import { AppStateType } from './store/redux/store';

const Routing = () => {
    const isAuth = useSelector((state: AppStateType) => state.user.isAuth)

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

                <Route path='*' element={<Auth />} />
            </Routes>
        </Router>
    )
}

export default Routing;