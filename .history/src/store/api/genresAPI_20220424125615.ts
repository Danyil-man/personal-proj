import { publicAPI, signedAPI } from './api'


export const categoriesAPI = {
    createCategory(genre: string){
        return  signedAPI.post('api/genre/create', genre)
    },
    getAllCategory(){
        return publicAPI.get('api/genre')
    }
}