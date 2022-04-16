import { bookType } from '../../types/generaTypes'
import { instanceAPI } from './api'



export const booksAPI = {
    getAllBooks(){
        return instanceAPI.get<Array<bookType>>('/books')
    }
}