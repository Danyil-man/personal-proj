import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from '../../routings/pathVariables';
import { Button, Form, FormLabel } from 'react-bootstrap';
import { Field, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { userAPI } from '../../store/api/userAPI';
import { signUp } from '../../store/redux/reducers/userReducer';
import { useDispatch } from 'react-redux';

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const location = useLocation()
    const LogIn = location.pathname === LOGIN_ROUTE

    const auth = async () => {
        if (LogIn) {
            const response = await userAPI.logIn(email, password)
            // eslint-disable-next-line no-debugger
            debugger
        } else {
            // eslint-disable-next-line no-debugger
            debugger
            const response = await userAPI.signUp(email, password)
            console.log('signup res', response)
        }
        // const dispatch = useDispatch()
        // dispatch(signUp(email, password))
        // console.log(email, password)
    }
    console.log(email, password)
    return (
        <div>
            <Formik initialValues={{
                email: '',
                password: ''
            }}
                onSubmit={auth}>
                <Form >
                    <div>
                        <h1>{LogIn ? 'Log In' : 'Sign Up'}</h1>
                        <div >
                            <label >Email</label>
                            <div>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="example@mail.com" required />
                            </div>
                        </div>
                        <div >
                            <label>Password</label>
                            <div>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Type" required />
                            </div>
                        </div>
                        <div >
                            <button type="submit" >
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