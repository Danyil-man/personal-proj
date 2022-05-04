import { ThunkAction } from 'redux-thunk';
import { CartItemsType } from '../../../types/generalTypes';
import { cartAPI } from '../../api/cartAPI';
import { AppStateType, InfernActionType } from '../store';
import { GET_CART } from '../variables/actionsType';


type initialStateType = {
    cart: Array<CartItemsType>
}

const initialState:initialStateType = {
    cart: []
}


const cartReducer = (state = initialState, action:ActionCreatoreType):initialStateType => {
    switch (action.type) {
        case GET_CART :
            return{
                ...state,
                cart: action.cart
            }            
    
        default:
            return state;
    }
}

const actions = {
    getCart: (cart: Array<CartItemsType>) => ({
        type: GET_CART, 
        cart
    } as const)
}

type ActionCreatoreType = InfernActionType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatoreType>

export const getAllCart = (userId: number):ThunkType => async (dispatch) => {
    const response = await cartAPI.getAllCart(userId)
    dispatch(actions.getCart(response.data))
}

export default cartReducer