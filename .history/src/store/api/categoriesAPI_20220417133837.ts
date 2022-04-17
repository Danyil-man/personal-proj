import { instanceAPI } from './api'



export const ctegoriesAPI = {
    getAllCategories(){
        return instanceAPI.get<Array<string>>('/categories')
    }
}