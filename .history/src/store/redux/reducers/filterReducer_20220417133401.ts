import React from 'react';
import { InfernActionType } from '../store';
import { GET_CATEGORIES } from '../variables/variables';

type initialStateType = {
    categories: Array<string>
}

const initialState:initialStateType = {
    categories: []
}

const filterReducer = (state=initialState, action:ActionCreatorType):initialStateType => {
    switch(action.type) {
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.categories
            }

        default:
            return state
    }
}

type ActionCreatorType = InfernActionType<typeof actions>

const actions = {
    getCategories: (categories: Array<string>) => ({
        type: GET_CATEGORIES,
        categories
    })
}


export default filterReducer;