import { instanceAPI } from './api'



export const categoriesAPI = {
    createCategory(genre: string){
        return instanceAPI.post('/genre/create')
    },
    getAllCategory(){
        return instanceAPI.get<Array<string>>('/categories')
    }
}