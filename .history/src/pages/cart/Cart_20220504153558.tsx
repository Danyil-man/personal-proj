import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../../store/redux/reducers/cartReducer';
import { AppStateType } from '../../store/redux/store';
import style from './Cart.module.scss'

const Cart = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { cart } = useSelector((state: AppStateType) => state.cart)
    useEffect(() => {
        dispatch(getAllCart(id))
    }, [])
    console.log(cart)
    return (
        <div className={style.container}>

        </div>
    )
}

export default Cart