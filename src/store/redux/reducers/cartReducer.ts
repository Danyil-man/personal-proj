import { ThunkAction } from 'redux-thunk';
import { CartItemsType } from '../../../types/generalTypes';
import { cartAPI } from '../../api/cartAPI';
import { AppStateType, InfernActionType } from '../store';
import { ADD_BOOK_CART, GET_CART, REMOVE_BOOK_CART } from '../variables/actionsType';


type initialStateType = {
    cart: Array<CartItemsType>
    bookId: number
    deleteId: number
}

const initialState:initialStateType = {
    cart: [],
    bookId: 0,
    deleteId: 0
}


const cartReducer = (state = initialState, action:ActionCreatoreType):initialStateType => {
    switch (action.type) {
        case GET_CART :
            return{
                ...state,
                cart: action.cart
            }            
        case ADD_BOOK_CART:
            return{
                ...state,
                bookId: action.bookId
            }
        case REMOVE_BOOK_CART:
            return{
                ...state,
                deleteId: action.bookId
            }
        default:
            return state;
    }
}

const actions = {
    getCart: (cart: Array<CartItemsType>) => ({
        type: GET_CART, 
        cart
    } as const),
    addBookCart: (bookId: number) => ({
        type: ADD_BOOK_CART, 
        bookId
    } as const),
    removeBookCart: (bookId: number) => ({
        type: REMOVE_BOOK_CART, 
        bookId
    } as const)
}

type ActionCreatoreType = InfernActionType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatoreType>

export const getAllCart = (userId: number):ThunkType => async (dispatch) => {
    const response = await cartAPI.getAllCart(userId)
    dispatch(actions.getCart(response.data))
}

export const addBookCart = (userId: number, bookId: number):ThunkType => async (dispatch) => {
    const response = await cartAPI.addBookToCart(userId, bookId)
    dispatch(actions.addBookCart(response.data))
}

export const removeBookCart = (bookId: number):ThunkType => async (dispatch) => {
    const response = await cartAPI.removeBookFromCart(bookId)
    dispatch(actions.removeBookCart(response.data))
}

export default cartReducer