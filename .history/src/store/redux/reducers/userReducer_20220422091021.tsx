import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { userType } from '../../../types/generalTypes';
import { userAPI } from '../../api/userAPI';
import { AppStateType, InfernActionType } from '../store';
import { SET_USER_DATA } from '../variables/actionsType';



type initialStateType = {
    email: string,
    password: string,
    isAuth: boolean
}

const initialState: initialStateType = {
    email: '',
    password: '',
    isAuth: true
}

const userReducer = (state = initialState, action: ActionCreatorType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.,

            }


        default:
            return state
    }
}

const actions = {
    setUserData: (email: string,
        password: string,) => ({
            type: SET_USER_DATA,
            data: { email, password }

        } as const),

}

type ActionCreatorType = InfernActionType<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const signUp = (email: string, password: string): ThunkType => async (dispatch) => {
    const response = await userAPI.signUp(email, password)
    dispatch(actions.setUserData(response.data))


}
export default userReducer