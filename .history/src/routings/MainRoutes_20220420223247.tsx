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
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorite
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: LogIn
    },
    {
        path: SIGNUP_ROUTE,
        Component: SignUp
    },
]

