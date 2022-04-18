import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form>
                <label>Name: </label>
                <input type="text" onChange={(e) => { setName(e.target.value) }} />
                <label>Email: </label>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
                <label>Password: </label>
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} />
            </form>
        </div>
    )
}

export default SignUp