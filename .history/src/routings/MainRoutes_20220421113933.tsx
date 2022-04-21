import Admin from '../pages/admin/Admin'
import Cart from '../pages/cart/Cart'
import Favorite from '../pages/favorite/Favorite'
import Home from '../pages/home/Home';
import LogIn from '../pages/logIn/LogIn';
import SignUp from '../pages/signUp/SignUp';
import { ADMIN_ROUTE, CART_ROUTE, FAVORITE_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from './pathVariables'

export const signedRoutes = [
    {
        path: ADMIN_ROUTE,
        component: Admin
    },
    {
        path: CART_ROUTE,
        component: Cart
    },
    {
        path: FAVORITE_ROUTE,
        component: Favorite
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: Home,
        authRequire: false
    },
    {
        path: LOGIN_ROUTE,
        component: LogIn,
        authRequire: false
    },
    {
        path: SIGNUP_ROUTE,
        component: SignUp,
        authRequire: false
    },
]

