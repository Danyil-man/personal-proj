
import { publicAPI, signedAPI } from './api'



export const booksAPI = {
    getAllBooks(filterID:number, 
        page:number, 
        limit: number, filterName:string, filterPrice:string){
        const genreId = `${filterID === 0 ? '' : filterID}` //no genre with id 0
        const name = `${filterName === '' ? '' : filterName}`
        const price = `${filterPrice === '' ? '' : filterPrice}`
        return publicAPI.get('api/book', {params:`
            ${genreId &&  page && limit && name && price}
       `})
    },
    createBook(book: any){
        return signedAPI.post('api/book/create', book)
    },
    getBook(id:number){
        return publicAPI.get(`api/book/${id}`)
    }
}