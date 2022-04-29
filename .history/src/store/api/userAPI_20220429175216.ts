import { UserType } from '../../types/generalTypes'
import { publicAPI, signedAPI } from './api'


export const userAPI = {
    signUp(email: string, password: string) {
        return publicAPI.post('api/user/signup', { email, password, role: 'USER' })
    },
    logIn(email: string, password: string) {
        return publicAPI.post('api/user/login', { email, password })
    },
    checkAuth() {
        return signedAPI.get('api/user/auth')
    }
}