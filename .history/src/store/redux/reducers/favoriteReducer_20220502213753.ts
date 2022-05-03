import { ThunkAction } from 'redux-thunk'
import { FavoritesType } from '../../../types/generalTypes'
import { favoriteAPI } from '../../api/favoriteAPI'
import { AppStateType, InfernActionType } from '../store'
import { ADD_FAVORITE, GET_FAVORITES } from '../variables/actionsType'



type initialStateType = {
    favorites: Array<FavoritesType>,
    bookId: number
}

const initialState:initialStateType = {
    favorites: [],
    bookId: 0
}

const favoriteReducer = (state = initialState, action:ActionCreatoreType):initialStateType => {
    switch(action.type){
        case GET_FAVORITES:
            return{
                ...state,
                favorites: action.favorites
            }
        case ADD_FAVORITE:
            return{
                ...state,
                bookId: action.bookId
            }
        default: return state
    }
}

type ActionCreatoreType = InfernActionType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatoreType>

const actions = {
    getAllFavorites: (favorites: Array<FavoritesType>) =>({
        type: GET_FAVORITES,
        favorites
    }as const),
    addFavorite: (bookId: number) =>({
        type: ADD_FAVORITE,
        bookId
    }as const)
}

export const getAllFavorites = (userId: number):ThunkType => async (dispatch) => {
    const response = await favoriteAPI.getAllFavorites(userId)
    dispatch(actions.getAllFavorites(response.data))
}

export const addFavorite = (userId: number, bookId:number):ThunkType => async (dispatch) => {
    const response = await favoriteAPI.addBookToFavorite(userId, bookId)
    console.log('THUNK ID',userId, bookId )
    dispatch(actions.addFavorite(response.data.bookId))
}

export default favoriteReducer