import Admin from '../pages/admin/Admin'
import Cart from '../pages/cart/Cart'
import Favorite from '../pages/favorite/Favorite'
import { ADMIN_ROUTE, CART_ROUTE, FAVORITE_ROUTE } from './pathVariables'

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

]