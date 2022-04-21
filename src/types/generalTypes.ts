import React from 'react';

//                                  BOOKS-REDUCER GENERAL TYPES

export type bookType = {
    id: number,
    author: string,
    name: string,
    description: string,
    genre: string,
    price: number,
    image: string,
    category: number,
    isFavorite: boolean,
    isCart: boolean
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