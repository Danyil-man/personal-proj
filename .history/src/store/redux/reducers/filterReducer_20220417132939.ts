import React from 'react';
import { GET_CATEGORIES } from '../variables/variables';

type initialStateType = {
    categories: Array<string>
}

const initialState:initialStateType = {
    categories: []
}

const filterReducer = (state=initialState, action:any) => {
    switch(action.type) {
        case GET_CATEGORIES:
            return{
                ...state,

            }

        default:
            return state
    }
}