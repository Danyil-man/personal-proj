import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';


const reducerPack = combineReducers({
    
})

type reducerPackType = typeof reducerPack

export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key:string]: (...args: any[]) => infer U }? U : never

const store = createStore(reducerPack, applyMiddleware(thunk))

export default store