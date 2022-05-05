import { signedAPI } from './api'




export const orderAPI = {
    getOrders(userId: number) {
        return signedAPI.get(`api/cart/order/${userId}`)
    },
    createOrder(id: number){
        return signedAPI.post(`api/cart/order/${id}`, id)
    }
}