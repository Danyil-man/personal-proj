import { bookType, createBookType } from '../../types/generalTypes'
import { publicAPI, signedAPI } from './api'



export const booksAPI = {
    getAllBooks(){
        return publicAPI.get('api/book')
    },
    createBook(book: any){
        return signedAPI.post('api/book', book)
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}