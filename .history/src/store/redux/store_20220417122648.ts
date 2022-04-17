import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import booksReducer from './reducers/booksReducer';


const reducerPack = combineReducers({
    books: booksReducer
})

type reducerPackType = typeof reducerPack

export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key:string]: (...args: any[]) => infer U } ? U : never

const store = createStore( 
    reducerPack, 
    applyMiddleware(thunkMiddleware)
    )

export default store