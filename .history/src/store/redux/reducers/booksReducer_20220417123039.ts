import { ThunkAction } from 'redux-thunk'
import { bookType } from '../../../types/generaTypes'
import { booksAPI } from '../../api/booksAPI'
import { AppStateType, InfernActionType } from '../store'
import { SET_BOOKS } from '../variables/variables'



type initialStateType = {
    books: Array<bookType>
}

const initialState:initialStateType = {
    books: []
}

const booksReducer = (state=initialState, action:ActionCreatoreType):initialStateType => {
    switch(action.type){
        case SET_BOOKS:
            return{
                ...state,
                books: action.books
            }
        
        default:
            return state
    }
}

const actions = {
    setBooks: (books: Array<bookType>) => ({
        type: SET_BOOKS,
        books
    })
}


type ActionCreatoreType = InfernActionType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatoreType>

export const getAllBooks = ():ThunkType => async (dispatch) => {
    const response = await booksAPI.getAllBooks()
    dispatch(actions.setBooks(response.data))
}

export default booksReducer;