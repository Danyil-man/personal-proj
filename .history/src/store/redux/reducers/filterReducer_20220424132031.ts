import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { selectedCategory } from '../../../types/generalTypes';
import {  genresAPI } from '../../api/genresAPI';
import { AppStateType, InfernActionType } from '../store';
import { GET_CATEGORIES, SELECTED_CATEGORY } from '../variables/actionsType';

type GenresType = {
    name: string
}

type initialStateType = {
    genres: Array<string>
    selectedCategories: selectedCategory
}

const initialState:initialStateType = {
    genres: [],
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
                genres: action.genres
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
    getAllGenres: (genres: Array<string>) => ({
        type: GET_CATEGORIES,
        genres
    } as const),
    setCategory: (category: selectedCategory) => ({
        type: SELECTED_CATEGORY,
        category
    } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const getAllGenres = ():ThunkType => async (dispatch) => {
    const response = await genresAPI.getAllGenres()
    dispatch(actions.getAllGenres(response.data.data))
}

export default filterReducer;