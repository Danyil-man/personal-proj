import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';


const reducerPack = combineReducers({

})

const store = createStore(reducerPack, applyMiddleware(thunk))

export default store