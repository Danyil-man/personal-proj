import React from 'react';
import { signedAPI } from './api';


export const favoriteAPI = {
    getAllFavorites(userId: number){
        return  signedAPI.get(`api/favorite/${userId}`)
    },
    addBookToFavorite(userId: number){
        return  signedAPI.post(`api/favorite/${userId}`)
    },
    removeBookFromFavorite(id: number){
        return  signedAPI.post(`api/favorite/${id}`)
    },
    addBookToCartFavorite(cartId: number){
        return  signedAPI.post(`api/favorite/cart/${cartId}`)
    }
}