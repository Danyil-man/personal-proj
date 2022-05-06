import { ThunkAction } from 'redux-thunk';
import { CartItemsType, OrderItemsType } from '../../../types/generalTypes';
import { cartAPI } from '../../api/cartAPI';
import { orderAPI } from '../../api/orderAPI';
import { AppStateType, InfernActionType } from '../store';
import { ADD_BOOK_CART, CREATE_ORDER, GET_ALL_ORDERS, GET_CART, REMOVE_BOOK_CART } from '../variables/actionsType';


type initialStateType = {
    orders: Array<OrderItemsType>
    success: boolean

}

const initialState:initialStateType = {
    orders: [],
    success: false
}


const orderReducer = (state = initialState, action:ActionCreatoreType):initialStateType => {
    switch (action.type) {
       case GET_ALL_ORDERS:
           return{
               ...state,
                orders: action.orders
           }
        case CREATE_ORDER:
            return{
                ...state,
                success: action.success
            }
        default:
            return state;
    }
}

const actions = {
    getAllOrders: (orders: Array<OrderItemsType>) => ({
        type: GET_ALL_ORDERS,
        orders
    } as const),
   createOrder: (success: boolean) => ({
        type: CREATE_ORDER,
        success
    } as const)
}

type ActionCreatoreType = InfernActionType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatoreType>

export const getAllOrders = (userId: number):ThunkType => async (dispatch) => {
    const response = await orderAPI.getOrders(userId)
    dispatch(actions.getAllOrders(response.data))
}

export const createOrder = (cartId: number):ThunkType => async (dispatch) => {
    const response = await orderAPI.createOrder(cartId)
    dispatch(actions.createOrder(response.data))
}

export default orderReducer