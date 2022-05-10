import React, { FC, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/redux/reducers/orderReducer';
import { CartType } from '../../types/generalTypes';
import { city, confirmingOrder, confirmOrder, mail, name, street } from '../../consts/buyModal';
import { close, fillAllField } from '../../consts/generalConsts';
import BuyBookModalField from './BuyBookModalField';

type BuyModalType = {
    show: boolean
    onHide: () => void
    cartId: number
    totalCartPrice: number
    orders: Array<CartType[]>
}

const BuyModal: FC<BuyModalType> = ({ show, cartId, totalCartPrice, orders, onHide }) => {
    const dispatch = useDispatch()
    const orderId = orders.map(orderItem => orderItem.map(order => order.bookId))
    const orderBookName = orders.map(orderItem => orderItem.map(order => order.book.name))
    const [values, setValues] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        price: totalCartPrice,
        bookId: orderId,
        bookName: orderBookName
    })


    const sendEmail = (e: any) => {
        e.preventDefault();
        if (values.name === '' || values.email === '' || values.street === '' || values.city === '') {
            alert(fillAllField)
        } else {
            emailjs.send('service_hxod138', 'template_ioxwesk', values, 'hIa6EbQItOhL_Sxmg')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            dispatch(createOrder(cartId))
            onHide()
        }

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
                        {confirmingOrder}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className={style.formBlock}>
                        <BuyBookModalField labelText={name} name='name' type={'text'} setOnChange={(e: any) => handleChange(e)} />
                        <BuyBookModalField labelText={mail} name='email' type={'email'} setOnChange={(e: any) => handleChange(e)} />
                        <BuyBookModalField labelText={street} name='street' type={'text'} setOnChange={(e: any) => handleChange(e)} />
                        <BuyBookModalField labelText={city} name='city' type={'text'} setOnChange={(e: any) => handleChange(e)} />
                        <Button type='submit' onClick={sendEmail}>{confirmOrder}</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>{close}</Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}
export default BuyModal