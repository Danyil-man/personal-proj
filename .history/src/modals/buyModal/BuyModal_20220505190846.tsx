import React, { useRef } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Formik } from 'formik';

const BuyModal = () => {
    const form = useRef<any>();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_hxod138', 'template_ioxwesk', form.current)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Formik initialValues={{

            }} onSubmit={sendEmail}>

            </Formik>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>

    )
}
export default BuyModal