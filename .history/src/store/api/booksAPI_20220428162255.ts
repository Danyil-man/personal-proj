
import { publicAPI, signedAPI } from './api'



export const booksAPI = {
    getAllBooks(filterID:number, page:number, limit: number, name:string){
        const genreId = `${filterID === 0 ? '' : filterID}` //no genre with id 0
        const filterName = `${name === '' ? '' : name}`
        return publicAPI.get('api/book', {params:{
            genreId, page, limit, filterName
        }})
    },
    createBook(book: any){
        return signedAPI.post('api/book/create', book)
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}