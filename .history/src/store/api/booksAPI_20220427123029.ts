
import { publicAPI, signedAPI } from './api'



export const booksAPI = {
    getAllBooks(filterID:number, page:number, limit: number){
        const checkGenreId = `${filterID === 0 ? '' : filterID}` //no genre with id 0
        return publicAPI.get('api/book', {params:{
            filterID, page, limit
        }})
    },
    createBook(book: any){
        return signedAPI.post('api/book/create', book)
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}