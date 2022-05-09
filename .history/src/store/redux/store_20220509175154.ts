
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import booksReducer from './reducers/booksReducer';
import userReducer from './reducers/userReducer';
import favoriteReducer from './reducers/favoriteReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';
import genreReducer from './reducers/genreReducer';


const reducerPack = combineReducers({
    books: booksReducer,
    genre: genreReducer,
    user: userReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
    order: orderReducer
})

type reducerPackType = typeof reducerPack

export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

const store = createStore( 
    reducerPack, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

export default store