import { instanceAPI } from './api'



export const categoriesAPI = {
    getAllCategories(){
        return instanceAPI.get<Array<string>>('/categories')
    }
}