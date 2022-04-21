import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { HOME_ROUTE } from '../../routings/pathVariables';
import { Button, Form, FormLabel } from 'react-bootstrap';
import { Field, Formik } from 'formik';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState<Array<user>>([])

    const getUsers = async () => {
        const resposne = await axios.get('http://localhost:3002/users')
        setUsers(resposne.data)
    }

    const submit = () => {
        axios.post('http://localhost:3002/create',
            { name: name, email: email, password: password }).then(() => {
                console.log('Response success')
            })

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
                        <h1 > SignUp </h1>
                        <div >
                            <label >Email</label>
                            <div>
                                <Field type="email" name="login" placeholder="example@mail.com" required />
                            </div>
                        </div>
                        <div >
                            <label>Password</label>
                            <div>
                                <Field type="password" name="password" placeholder="Type in..." required />
                            </div>
                        </div>
                        <div >
                            <button type="submit" >
                                Зареєструватися
                            </button>
                            <div >
                                <p>Вже маєте акаунт? </p>
                                <Link to='/login'>Увійти</Link>
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

export default SignUp