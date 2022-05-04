import { signedAPI } from './api'




export const cartAPI = {
    getAllCart(userId: number) {
        return signedAPI.get(`api/cart/${userId}`)
    },
    addBookToCart(userId: number, bookId: number) {
        return signedAPI.post(`api/cart/${userId}?bookId=${bookId}`)
    },
    removeBookFromCart(id: number) {
        return signedAPI.delete(`api/cart/${id}`)
    },
    buyBookCart(id: number) {
        return signedAPI.post(`api/cart/order/${id}`)
    },
    getUserCart(userId: number) {
        return signedAPI.get(`api/cart/order/${userId}`)
    }
}