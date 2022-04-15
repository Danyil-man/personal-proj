import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';


const reducerPack = combineReducers({
    
})

type reducerPackType = typeof reducerPack

export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key:string]: (...args: any[]) => infer U }? U : never

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( reducerPack, composeEnhancers(applyMiddleware(thunk)))

export default store