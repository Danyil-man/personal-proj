import { ThunkAction } from 'redux-thunk'
import { FavoritesType } from '../../../types/generalTypes'
import { favoriteAPI } from '../../api/favoriteAPI'
import { AppStateType, InfernActionType } from '../store'
import { GET_FAVORITES } from '../variables/actionsType'



type initialStateType = {
    favorites: Array<FavoritesType>
}

const initialState:initialStateType = {
    favorites: []
}

const favoriteReducer = (state = initialState, action:ActionCreatoreType):initialStateType => {
    switch(action.type){
        case GET_FAVORITES:
            return{
                ...state,
                favorites: action.favorites
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
    }as const)
}

export const getAllFavorites = (userId: number):ThunkType => async (dispatch) => {
    const response = await favoriteAPI.getAllFavorites(userId)
    dispatch(actions.getAllFavorites(response.data.rows))
}

export default favoriteReducer