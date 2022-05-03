import React from 'react';
import { publicAPI, signedAPI } from './api';


export const favoriteAPI = {
    getAllFavorites(userId: number){
        return  signedAPI.get(`api/favorite/${userId}`)
    },
    addBookToFavorite(userId: number, bookId: number | string = ''){
        return  signedAPI.post(`api/favorite/${userId}?bookId=${bookId}`)  
    },
    removeBookFromFavorite(id: number){
        return  signedAPI.delete(`api/favorite/${id}`)
    },
    addBookToCartFavorite(cartId: number){
        return  signedAPI.post(`api/favorite/cart/${cartId}`)
    }
}