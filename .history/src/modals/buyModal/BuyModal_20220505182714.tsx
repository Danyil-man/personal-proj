import React from 'react';
import style from './BuyModal.module.scss'
import { SMTPClient } from 'emailjs'

const BuyModal = () => {
    const client = new SMTPClient({
        user: 'user',
        password: 'password',
        host: 'smtp.your-email.com',
        ssl: true,
    });
    const sendEmail = () => {
        client.send({
            text: '',
            from: 'you <username@your-email.com>',
            to: 'someone <someone@your-email.com>, another <another@your-email.com>',
            cc: 'else <else@your-email.com>',
            subject: 'testing emailjs',
        })
    }
    return (
        <div>

        </div>
    )
}
export default BuyModal