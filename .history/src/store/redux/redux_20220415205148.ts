import React from 'react';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';


const reducerPack = combineReducers({
    
})

type reducerPackType = typeof reducerPack

export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key:string]: (...args: any[]) => infer U }? U : never

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducerPack, composeEnhancers(applyMiddleware(thunk)))

export default store