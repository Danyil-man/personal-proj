import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { categoriesAPI } from '../../api/categoriesAPI';
import { AppStateType, InfernActionType } from '../store';
import { GET_CATEGORIES } from '../variables/actionsType';

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
    getAllCategories: (categories: Array<string>) => ({
        type: GET_CATEGORIES,
        categories
    })
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const getAllCategories = ():ThunkType => async (dispatch) => {
    const response = await categoriesAPI.getAllCategories()
    dispatch(actions.getAllCategories(response.data))
}

export default filterReducer;