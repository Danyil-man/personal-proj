import { bookType } from '../../types/generalTypes'
import { publicAPI, signedAPI } from './api'



export const booksAPI = {
    getAllBooks(){
        return publicAPI.get('api/book')
    },
    createBook(book: bookType){
        return publicAPI.post('api/book/create', book)
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}