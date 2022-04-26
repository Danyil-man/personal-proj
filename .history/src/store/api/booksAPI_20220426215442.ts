import { bookType, createBookType } from '../../types/generalTypes'
import { publicAPI, signedAPI } from './api'



export const booksAPI = {
    getAllBooks(genreId:number, page:number, limit: number){
        const checkGenreId = `${genreId === 0 ? '' : genreId}`
        return publicAPI.get('api/book', {params:{
            checkGenreId, page, limit
        }})
    },
    createBook(book: any){
        return signedAPI.post('api/book/create', book)
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}