import { publicAPI } from './api'


export const userAPI = {
    async signUp(email:string, password:string){
        const response = await publicAPI.post('api/user/signup', {email, password, role: 'ADMIN'})
        return response
    },
    async logIn(email:string, password:string){
        const response = await publicAPI.post('api/user/login', {email, password})
        return response
    },
    async checkAuth(){
        const response = await publicAPI.get('api/user/auth')
        return response
    }
}