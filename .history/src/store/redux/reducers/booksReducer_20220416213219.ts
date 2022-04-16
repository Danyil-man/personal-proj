import axios from 'axios'
import React from 'react'
import { ThunkAction } from 'redux-thunk'
import { bookType } from '../../../types/generaTypes'
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

export const getAllBooks = ():ThunkType => async (dispatch) => {
    const response = await axios.get('')
}

type ActionCreatoreType = InfernActionType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatoreType>

export default booksReducer;