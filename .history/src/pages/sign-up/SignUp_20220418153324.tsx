import React, { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <form>
                <label>Name: </label>
                <input type="text" onChange={(e) => { setName(e.target.value) }} />
            </form>
        </div>
    )
}

export default SignUp