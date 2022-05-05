import React, { useRef, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Field, Formik } from 'formik';

const BuyModal = () => {
    const form = useRef<any>();
    const [values, setValues] = useState('')
    const [email, setEmail] = useState('')
    const sendEmail = (e: any, values: any) => {
        e.preventDefault();

        emailjs.send('service_hxod138', 'template_ioxwesk', values)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Formik initialValues={{
                name: '',
                email: ''
            }} onSubmit={sendEmail}>
                <label>Name</label>
                <Field type="text"
                    name="name" />
                <label>Email</label>
                <input type="email"
                    name="email" />
            </Formik>
        </div>

    )
}
export default BuyModal