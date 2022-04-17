import { instanceAPI } from "./api"



export const ctegoriesAPI = {
    getAllCategories(){
        return instanceAPI.get('/categories')
    }
}