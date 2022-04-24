import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { selectedCategory } from '../../../types/generalTypes';
import {  genresAPI } from '../../api/genresAPI';
import { AppStateType, InfernActionType } from '../store';
import { GET_CATEGORIES, SELECTED_CATEGORY } from '../variables/actionsType';

type initialStateType = {
    categories: Array<string>
    selectedCategories: selectedCategory
}

const initialState:initialStateType = {
    categories: [],
    selectedCategories: {
        id: undefined,
        name: undefined
    }
}

const filterReducer = (state=initialState, action:ActionCreatorType):initialStateType => {
    switch(action.type) {
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.categories
            }

        case SELECTED_CATEGORY:
            return{
                ...state,
                selectedCategories: action.category
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
    } as const),
    setCategory: (category: selectedCategory) => ({
        type: SELECTED_CATEGORY,
        category
    } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const getAllCategories = ():ThunkType => async (dispatch) => {
    const response = await genresAPI.getAllCategory()
    dispatch(actions.getAllCategories(response.data))
}

export default filterReducer;