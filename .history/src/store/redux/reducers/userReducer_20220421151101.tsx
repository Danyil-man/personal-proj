import React from 'react';
import { userType } from '../../../types/generalTypes';



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

const userReducer = () => {

}

export default userReducer