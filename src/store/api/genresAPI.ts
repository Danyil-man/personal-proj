import { publicAPI, signedAPI } from './api'


export const genresAPI = {
    createGenre(genre: string){
        return  signedAPI.post('api/genre/create', genre)
    },
    getAllGenres(){
        return publicAPI.get('api/genre')
    }
}