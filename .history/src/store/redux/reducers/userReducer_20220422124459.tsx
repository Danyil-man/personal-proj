import jwtDecode from 'jwt-decode';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThunkAction } from 'redux-thunk';
import { HOME_ROUTE } from '../../../routings/pathVariables';
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
    isAuth: false
}


const userReducer = (state = initialState, action: ActionCreatorType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.data.email,
                password: action.data.password,
                isAuth: true
            }


        default:
            return state
    }
}

const actions = {
    setUserData: (email: string,
        password: string, isAuth: boolean) => ({
            type: SET_USER_DATA,
            data: { email, password, isAuth }

        } as const),

}

type ActionCreatorType = InfernActionType<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const signUp = (email: string, password: string): ThunkType => async (dispatch) => {
    try {
        const response = await userAPI.signUp(email, password)
        dispatch(actions.setUserData(email, password, true))
        localStorage.setItem('token', response.data.token)
        return jwtDecode(response.data.token)
    } catch (e: any) {
        alert(e.response.data.message)
    }

}

export const logIn = (email: string, password: string): ThunkType => async (dispatch) => {
    try {
        const response = await userAPI.logIn(email, password)
        dispatch(actions.setUserData(email, password, true))
        localStorage.setItem('token', response.data.token)
        return jwtDecode(response.data.token)
    } catch (e: any) {
        alert(e.response.data.message)
    }

}

export default userReducer