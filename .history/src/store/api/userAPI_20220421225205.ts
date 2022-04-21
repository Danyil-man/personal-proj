import React from 'react'
import { publicAPI } from './api'


export const userAPI = {
    signUp(email: string, password: string) {
        return publicAPI.post('api/user/signup', { email, password, role: 'ADMIN' })
    },
    logIn(email: string, password: string) {
        return publicAPI.post('api/user/login', { email, password })
    },
    checkAuth() {
        return publicAPI.get('api/user/auth')
    }
}