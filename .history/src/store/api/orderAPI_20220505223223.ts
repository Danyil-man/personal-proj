import { signedAPI } from './api'




export const orderAPI = {
    getOrders(userId: number) {
        return signedAPI.get(`api/cart/order/${userId}`)
    },
    createOrder(cartId: number){
        console.log('APICARTID', cartId);
        return signedAPI.post(`api/cart/order/${cartId}`)
    }
}