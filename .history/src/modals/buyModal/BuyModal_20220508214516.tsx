import React, { FC, useState } from 'react';
import style from './BuyModal.module.scss'
import emailjs from '@emailjs/browser'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../store/redux/reducers/orderReducer';
import { CartType } from '../../types/generalTypes';
import { city, confirmingOrder, confirmOrder, mail, name, street } from '../../consts/buyModal';
import { close } from '../../consts/generalConsts';

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
    console.log(orders);


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
                        <div className={style.formItem}>
                            <label className={style.formItemName}>{name}</label>
                            <input className={style.formItemInput} type="text"
                                name="name" onChange={(e: any) => handleChange(e)} required />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>{mail}</label>
                            <input className={style.formItemInput} type="email"
                                name="email" onChange={handleChange} required />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>{street}</label>
                            <input className={style.formItemInput} type="text"
                                name="street" onChange={handleChange} required />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>{city}</label>
                            <input className={style.formItemInput} type="text"
                                name="city" onChange={handleChange} required />
                        </div>

                        <Button onClick={sendEmail}>{confirmOrder}</Button>
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