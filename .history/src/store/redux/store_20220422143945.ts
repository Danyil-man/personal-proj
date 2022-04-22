import filterReducer from './reducers/filterReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import booksReducer from './reducers/booksReducer';
import userReducer from './reducers/userReducer';


const reducerPack = combineReducers({
    books: booksReducer,
    filter: filterReducer,
    user: userReducer
})

type reducerPackType = typeof reducerPack

export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

const store = createStore( 
    reducerPack, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

export default store