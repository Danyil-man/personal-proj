import React, { FC, useRef, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Field, Form, Formik } from 'formik';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/redux/reducers/orderReducer';
import { CartType, UserCartItemsType } from '../../types/generalTypes';


type BuyModalType = {
    show: boolean
    onHide: () => void
    cartId: number
    totalCartPrice: number
    orderArray: Array<CartType>
}

const BuyModal: FC<BuyModalType> = ({ show, cartId, totalCartPrice, orderArray, onHide }) => {
    const dispatch = useDispatch()
    //const { cartPrice } = totalPrice()
    const [values, setValues] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        price: totalCartPrice
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
        onHide()
    };

    const handleChange = (e: any) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }


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
                    <div>
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
                        <label>Ціна</label>
                        <input type="text"
                            name="price" value={totalCartPrice} />
                        <label>Назва книг</label>
                        <input type='hidden'
                            name="price" value={totalCartPrice} />
                        {orderArray.map(orderItem => (<>
                            <input name='bookId' key={orderItem.book.id} value={orderItem.book.id} type='hidden' />
                            <input name='bookName' key={orderItem.book.id} value={orderItem.book.author} type='hidden' />
                        </>
                        ))}

                        <button onClick={sendEmail}>Купити</button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Закрити</Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}
export default BuyModal