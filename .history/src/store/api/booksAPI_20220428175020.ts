
import { publicAPI, signedAPI } from './api'



export const booksAPI = {
    getAllBooks(filterID:number, 
        page:number, 
        limit: number){
        const genreId = `${filterID !== null ? filterID : ''}` //no genre with id 0
        const name = `${filterName !== null ? filterName : ''}`
        const price = `${filterPrice !== null ? filterPrice : ''}`
        return publicAPI.get('api/book', {params:{
            genreId,  page,  limit
        }
       })
    },
    createBook(book: any){
        return signedAPI.post('api/book/create', book)
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}