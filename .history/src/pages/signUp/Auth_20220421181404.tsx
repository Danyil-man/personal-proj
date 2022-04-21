import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../routings/pathVariables';
import { Button, Form, FormLabel } from 'react-bootstrap';
import { Field, Formik } from 'formik';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState<Array<user>>([])

    const location = useLocation()
    const LogIn = location.pathname === LOGIN_ROUTE

    const submit = () => {
        alert('Auth')
    }
    return (
        <div>
            <Formik initialValues={{
                email: '',
                password: ''
            }}
                onSubmit={submit}>
                <Form >
                    <div>
                        <h1>{LogIn ? 'Log In' : 'Sign Up'}</h1>
                        <div >
                            <label >Email</label>
                            <div>
                                <Field type="email" name="login" placeholder="example@mail.com" required />
                            </div>
                        </div>
                        <div >
                            <label>Password</label>
                            <div>
                                <Field type="password" name="password" placeholder="Type" required />
                            </div>
                        </div>
                        <div >
                            <button type="submit" >
                                {LogIn ? 'Log In' : 'Sign Up'}
                            </button>
                            <div >
                                {LogIn ? <div>
                                    <p>Немає акаунта?</p>
                                    <Link to='/ішптгз'>Зареєструватися</Link>
                                </div> : <div>
                                    <p>Вже маєте акаунт? </p>
                                    <Link to='/login'>Увійти</Link>
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