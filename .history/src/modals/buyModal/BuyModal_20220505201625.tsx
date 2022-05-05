import React, { useRef, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Field, Formik } from 'formik';
import { Modal } from 'react-bootstrap';

type BuyModalType = {
    show: boolean
    onHide: () => void
}

const BuyModal = () => {

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
                    <Formik initialValues={{
                        genre: ''
                    }} onSubmit={addGenre}>
                        <Form>
                            <label>Назва жанру</label>
                            <Field placeholder='назва жанру' name="genre" />
                            <button type='submit'>Добавити</button>
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Закрити</Button>
                </Modal.Footer>
            </Modal>
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