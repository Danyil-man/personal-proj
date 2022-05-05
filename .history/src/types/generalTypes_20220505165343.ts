import React from 'react';

export type bookType = {
    id: number,
    name: string,
    author: string,
    description: string,
    price: number,
    image: string,
    rating: number,
    genreId: number,
}

export type createBookType = {
    name: void,
    author: void,
    description: void,
    price: void,
    image: string,
    genreId: void
}

export type userType ={
    id?: number,
    email?: string,
    password?: string,
    role?: string
}

export type selectedCategory = {
    id?: number,
    name?: string
}

export type addGenre = {
    name: string
}

export type GenresType = {
    id: number
    name: string
}

export type UserType = {
    id: number,
        email: string,
        role: string
}

export type FavoriteBookType = {
        id: number,
        name: string,
        author: string,
        price: number,
        image: string,
        rating: number,
        genreId: number
}

export type FavoritesType = {
    id: number,
    userId: number,
    bookId: number,
    book:  FavoriteBookType
}

export type CartBookType = {
    id: number
    name: string
    author: string
    price: number
    image: string
    rating: number
    count: number
    genreId: number
}

export type CartType = {
    id: number
    isSold: boolean
    cartId: number
    bookId: number
    book: CartBookType
}

export type CartItemsType = {
    id: number
    userId: number
    cart_books: Array<CartType>
}

export type UserCartItemsType = {
    id: number
    isSold: boolean
    createdAt: string
    updatedAt: string
    cartId: number
    bookId: number
    book: CartBookType
}

export type OrderItemsType = {
    id: number
    userId: number
    cart_books: Array<UserCartItemsType>
}