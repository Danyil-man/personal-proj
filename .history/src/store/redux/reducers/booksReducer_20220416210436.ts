import React from 'react'
import { bookType } from '../../../types/generaTypes'
import { SET_BOOKS } from '../variables/variables'



type initialStateType = {
    books: Array<bookType>
}

const initialState:initialStateType = {
    books: []
}

const booksReducer = (state=initialState, action:any):initialStateType => {
    switch(action.type){
        case SET_BOOKS:
            return{
                ...state,
                // books: action.
            }
    }
}