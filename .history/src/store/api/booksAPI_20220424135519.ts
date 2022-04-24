import { bookType } from '../../types/generalTypes'
import { publicAPI } from './api'



export const booksAPI = {
    getAllBooks(){
        return publicAPI.get('api/book')
    },
    createBook(){
        return publicAPI.get('api/book')
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}