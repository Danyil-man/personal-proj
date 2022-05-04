import { GET_CART } from "../variables/actionsType";


type initialStateType = {
    cart: Array<>
}

const initialState:initialStateType = {
    cart: []
}


const cartReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case GET_CART :
            
            break;
    
        default:
            return state;
    }
}

export default cartReducer