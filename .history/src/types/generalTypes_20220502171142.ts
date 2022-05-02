import React from 'react';

//                                  BOOKS-REDUCER GENERAL TYPES

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
    genreId: number,
}

export type FavoriteItem = {
    id: number,
    userId: number,
    bookId: number,
    favoriteBook:  FavoriteBookType
}

export type FavoritesType = {
    favoriteItem: FavoriteItem
}