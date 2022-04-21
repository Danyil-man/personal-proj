import React from 'react';
import { userType } from '../../../types/generalTypes';
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
    isAuth: false
}

const userReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,

            }


        default:
            return state
    }
}

export default userReducer