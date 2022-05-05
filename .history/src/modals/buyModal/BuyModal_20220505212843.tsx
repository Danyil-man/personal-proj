import React, { FC, useRef, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Field, Form, Formik } from 'formik';
import { Button, Modal } from 'react-bootstrap';

type BuyModalType = {
    show: boolean
    onHide: () => void
}

const BuyModal: FC<BuyModalType> = ({ show, onHide }) => {
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const sendEmail = (e: any) => {
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
            <Modal
                size="lg"
                centered
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Додати новий Жанр
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <label>Name</label>
                    <Field type="text"
                        name="name" />
                    <label>Email</label>
                    <input type="email"
                        name="email" />
                    <button type='submit'>Купити</button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Закрити</Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}
export default BuyModal