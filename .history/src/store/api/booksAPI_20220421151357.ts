import { bookType } from '../../types/generalTypes'
import { instanceAPI } from './api'



export const booksAPI = {
    getAllBooks(){
        return instanceAPI.get<Array<bookType>>('/books')
    }
}