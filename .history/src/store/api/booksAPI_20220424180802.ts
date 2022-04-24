import { bookType } from '../../types/generalTypes'
import { publicAPI, signedAPI } from './api'



export const booksAPI = {
    getAllBooks(){
        return publicAPI.get('api/book')
    },
    createBook(){
        return signedAPI.post('api/book/create')
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}