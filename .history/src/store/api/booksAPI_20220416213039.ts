import { instanceAPI } from "./api"



export const booksAPI = {
    getAllBooks(){
        return instanceAPI.get('/books')
    }
}