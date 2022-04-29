import jwtDecode from 'jwt-decode';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ThunkAction } from 'redux-thunk';
import { HOME_ROUTE } from '../../../routings/pathVariables';
import { userType } from '../../../types/generalTypes';
import { userAPI } from '../../api/userAPI';
import { AppStateType, InfernActionType } from '../store';
import { DELETE_USER_DATA, IS_LOADING, SET_USER_DATA } from '../variables/actionsType';



type initialStateType = {
    email: string,
    password: string,
    role: string,
    isAuth: boolean,
    isLoading: boolean
}

const initialState: initialStateType = {
    email: '',
    password: '',
    role: '',
    isAuth: false,
    isLoading: false
}


const userReducer = (state = initialState, action: ActionCreatorType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.data.email,
                password: action.data.password,
                role: action.data.role,
                isAuth: true
            }
        case DELETE_USER_DATA:
            return {
                ...state,
                email: action.data.email,
                password: action.data.password,
                isAuth: false
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

const actions = {
    setUserData: (email: string,
        password: string, role:string, isAuth: boolean) => ({
            type: SET_USER_DATA,
            data: { email, password, role, isAuth }

        } as const),
    deleteUserData: (email: string,
        password: string, isAuth: boolean) => ({
            type: DELETE_USER_DATA,
            data: { email, password, isAuth }
        } as const),
        setIsLoading: (isLoading: boolean) => ({
            type: IS_LOADING,
            isLoading
        } as const)

}

type ActionCreatorType = InfernActionType<typeof actions>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const signUp = (email: string, password: string, role:string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setIsLoading(true))
        const response = await userAPI.signUp(email, password)
        dispatch(actions.setUserData(email, password, role, true))
        localStorage.setItem('token', response.data.token)
        dispatch(actions.setIsLoading(false))
        return jwtDecode(response.data.token)
    } catch (e: any) {
        alert(e.response.data.message)
    }

}

export const logIn = (email: string, password: string, role:string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setIsLoading(true))
        const response = await userAPI.logIn(email, password)
        dispatch(actions.setUserData(email, password, role, true))
        localStorage.setItem('token', response.data.token)
        dispatch(actions.setIsLoading(false))
        return jwtDecode(response.data.token)
    } catch (e: any) {
        alert(e.response.data.message)
    }
}

export const checkAuth = async () => {
    const response = await userAPI.checkAuth()
    localStorage.setItem('token', response.data.token)
    return jwtDecode(response.data.token)
}

export const logOut = (): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setIsLoading(true))
        dispatch(actions.deleteUserData('', '', false))
        localStorage.removeItem('token')
        dispatch(actions.setIsLoading(false))
    } catch (e: any) {
        alert(e.response.data.message)
    }
}
export default userReducer