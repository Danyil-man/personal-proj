import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { HOME_ROUTE } from '../../routings/pathVariables';
import { Button, Form, FormLabel } from 'react-bootstrap';
import { Formik } from 'formik';

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
                <Form>
                    <label>dasd</label>
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