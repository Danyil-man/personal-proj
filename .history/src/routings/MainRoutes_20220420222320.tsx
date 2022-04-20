import Admin from '../pages/admin/Admin'
import { ADMIN_ROUTE } from './pathVariables'

export const signedRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = []