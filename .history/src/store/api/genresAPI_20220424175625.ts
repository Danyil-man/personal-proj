import { addGenre } from '../../types/generalTypes'
import { publicAPI, signedAPI } from './api'



export const genresAPI = {
    createGenre(genre: addGenre){
        return  signedAPI.post('api/genre/create', genre)
    },
    getAllGenres(){
        return publicAPI.get('api/genre')
    }
}