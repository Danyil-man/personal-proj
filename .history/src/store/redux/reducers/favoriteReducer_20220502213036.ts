import { ThunkAction } from 'redux-thunk'
import { FavoritesType } from '../../../types/generalTypes'
import { favoriteAPI } from '../../api/favoriteAPI'
import { AppStateType, InfernActionType } from '../store'
import { ADD_FAVORITE, GET_FAVORITES } from '../variables/actionsType'

export type book = {
    bookId?: number
}

type initialStateType = {
    favorites: Array<FavoritesType>,
    book:  book
}

const initialState:initialStateType = {
    favorites: [],
    book: {
        bookId: undefined
    }
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
                book: action.book
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
    addFavorite: (book: book) =>({
        type: ADD_FAVORITE,
        book
    }as const)
}

export const getAllFavorites = (userId: number):ThunkType => async (dispatch) => {
    const response = await favoriteAPI.getAllFavorites(userId)
    dispatch(actions.getAllFavorites(response.data))
}

export const addFavorite = (userId: number, book:book):ThunkType => async (dispatch) => {
    const response = await favoriteAPI.addBookToFavorite(userId, book)
    dispatch(actions.addFavorite(response.data))
}

export default favoriteReducer