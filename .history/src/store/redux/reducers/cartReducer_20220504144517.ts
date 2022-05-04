import { GET_CART } from '../variables/actionsType';


type initialStateType = {
    //cart: Array<>
}

const initialState:initialStateType = {
    //cart: []
}


const cartReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_CART :
            
            break;
    
        default:
            return state;
    }
}

const actions = {
    getCart: () => ({
        type: GET_CART, 
        
    } as const)
}


export default cartReducer