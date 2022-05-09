import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { addGenre, GenresType } from '../../../types/generalTypes';
import {  genresAPI } from '../../api/genresAPI';
import { AppStateType, InfernActionType } from '../store';
import {  GET_CATEGORIES, IS_LOADING, SELECTED_CATEGORY } from '../variables/actionsType';


type initialStateType = {
    genres: Array<GenresType>
    genre: addGenre
    isLoading: boolean
}

const initialState:initialStateType = {
    genres: [],
    genre: {name: ''},
    isLoading: false
}

const genreReducer = (state=initialState, action:ActionCreatorType):initialStateType => {
    switch(action.type) {
        case GET_CATEGORIES:
            return{
                ...state,
                genres: action.genres
            }

        case SELECTED_CATEGORY:
            return{
                ...state,
                genre: action.genre
            }

        case IS_LOADING:
            return{
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state
    }
}

type ActionCreatorType = InfernActionType<typeof actions>

const actions = {
    getAllGenres: (genres: Array<GenresType>) => ({
        type: GET_CATEGORIES,
        genres
    } as const),
    setGenre: (genre: addGenre) => ({
        type: SELECTED_CATEGORY,
        genre
    } as const),
    setIsLoading: (isLoading: boolean) => ({
        type: IS_LOADING,
        isLoading
    } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const getAllGenres = ():ThunkType => async (dispatch) => {
    const response = await genresAPI.getAllGenres()
    dispatch(actions.getAllGenres(response.data))
}

export const createGenre = (genre: addGenre):ThunkType => async (dispatch) => {
    dispatch(actions.setIsLoading(true))
    const response = await genresAPI.createGenre(genre)
    dispatch(actions.setGenre(response.data))
    dispatch(actions.setIsLoading(false))
}

export default genreReducer;