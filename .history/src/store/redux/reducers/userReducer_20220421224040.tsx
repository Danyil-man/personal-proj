import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { userType } from '../../../types/generalTypes';
import { userAPI } from '../../api/userAPI';
import { AppStateType, InfernActionType } from '../store';
import { SET_USER_DATA } from '../variables/actionsType';



type initialStateType = {
    user: userType
    isAuth: boolean
}

const initialState: initialStateType = {
    user: {
        id: undefined,
        email: undefined,
        password: undefined,
        role: undefined
    },
    isAuth: true
}

const userReducer = (state = initialState, action: ActionCreatorType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.user,
                isAuth: false
            }


        default:
            return state
    }
}

const actions = {
    setUserData: (user: userType, isAuth: boolean) => ({
        type: SET_USER_DATA,
        user,
        isAuth
    } as const),

}

type ActionCreatorType = InfernActionType<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const signUp = (email: string, password: string): ThunkType => async (dispatch) => {
    const response = await userAPI.signUp(email, password)
    dispatch(actions.setUserData(response.data, true))
    // eslint-disable-next-line no-debugger
    debugger
}
export default userReducer