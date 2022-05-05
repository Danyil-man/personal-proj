import React, { useRef, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Formik } from 'formik';

const BuyModal = () => {
    const form = useRef<any>();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.send('service_hxod138', 'template_ioxwesk', form.current)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" value={name} onChange={(e: any) => setName(e.target.value)} />
                <label>Email</label>
                <input type="email" name="user_email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                <input type="submit" value="Send" />
            </form>
        </div>

    )
}
export default BuyModal