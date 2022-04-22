import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from '../../routings/pathVariables';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { userAPI } from '../../store/api/userAPI';
import { logIn, signUp } from '../../store/redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';

const Auth = () => {
    const [emailAuth, setEmail] = useState('')
    const [passwordAuth, setPassword] = useState('')
    const dispatch = useDispatch()
    const { email, password } = useSelector((state: AppStateType) => state.user)
    const location = useLocation()
    const LogIn = location.pathname === LOGIN_ROUTE

    // const auth = async () => {
    //     if (LogIn) {
    //         const response = await userAPI.logIn(email, password)
    //         console.log('log res', response)
    //     } else {

    //         const response = await userAPI.signUp(email, password)
    //         console.log('signup res', response)
    //     }
    // }

    const auth = (values: any) => {
        if (LogIn) {
            dispatch(logIn(values.email, values.password))
        } else {
            dispatch(signUp(values.email, values.password))
        }
    }
    console.log('usestate: ', emailAuth, passwordAuth)
    console.log('reduxstate: ', email, password)
    return (
        <div>
            <Formik initialValues={{
                email: '',
                password: ''
            }}

                onSubmit={auth} >
                <Form >
                    <div>
                        <h1>{LogIn ? 'Log In' : 'Sign Up'}</h1>
                        <div >
                            <label >Email</label>
                            <div>
                                <Field name="email" placeholder="example@mail.com" required />
                            </div>
                        </div>
                        <div >
                            <label>Password</label>
                            <div>
                                <Field name="password" placeholder="Type" type="password" required />
                            </div>
                        </div>
                        <div >
                            <button type="submit">
                                {LogIn ? 'Log In' : 'Sign Up'}
                            </button>
                            <div >
                                {LogIn ? <div>
                                    <p>Немає акаунта?</p>
                                    <Link to={SIGNUP_ROUTE}>Зареєструватися</Link>
                                </div> : <div>
                                    <p>Вже маєте акаунт? </p>
                                    <Link to={LOGIN_ROUTE}>Увійти</Link>
                                </div>}
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>

        </div>
    )
}

type user = {
    id: number;
    name: string
}

// return (
//     <div >

//     </div>
// )

export default Auth