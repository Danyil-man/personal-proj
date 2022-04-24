import { publicAPI, signedAPI } from './api'


export const genresAPI = {
    createCategory(genre: string){
        return  signedAPI.post('api/genre/create', genre)
    },
    getAllCategory(){
        return publicAPI.get('api/genre/')
    }
}