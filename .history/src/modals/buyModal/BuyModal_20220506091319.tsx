import React, { FC, useRef, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Field, Form, Formik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/redux/reducers/orderReducer';

type BuyModalType = {
    show: boolean
    onHide: () => void
    cartId: number
}

const BuyModal: FC<BuyModalType> = ({ show, cartId, onHide }) => {
    const dispatch = useDispatch()

    const [values, setValues] = useState({
        name: '',
        email: '',
        street: '',
        city: ''
    })

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.send('service_hxod138', 'template_ioxwesk', values, 'hIa6EbQItOhL_Sxmg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        dispatch(createOrder(cartId))
    };

    const handleChange = (e: any) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    console.log('MODAL CART ID', cartId);


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
                    <form>
                        <label>Ім&#39;я</label>
                        <input type="text"
                            name="name" onChange={(e: any) => handleChange(e)} />
                        <label>Ел.пошта</label>
                        <input type="еуче"
                            name="email" onChange={handleChange} />
                        <label>Вулиця</label>
                        <input type="text"
                            name="street" onChange={handleChange} />
                        <label>Місто</label>
                        <input type="text"
                            name="city" onChange={handleChange} />
                        <button onClick={sendEmail}>Купити</button>
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Закрити</Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}
export default BuyModal