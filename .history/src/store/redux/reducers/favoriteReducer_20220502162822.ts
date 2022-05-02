import { ThunkAction } from "redux-thunk"
import { FavoritesType } from "../../../types/generalTypes"
import { AppStateType, InfernActionType } from "../store"
import { GET_FAVORITES } from "../variables/actionsType"



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


export default favoriteReducer