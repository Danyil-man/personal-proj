import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../../store/redux/reducers/cartReducer';
import { AppStateType } from '../../store/redux/store';
import CartItem from './CartItem';
import style from './Cart.module.scss'

const Cart = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { cart } = useSelector((state: AppStateType) => state.cart)
    const cartBook = cart.map(cartItem => cartItem.cart_books)
    useEffect(() => {
        dispatch(getAllCart(id))
    }, [])
    console.log(cartBook.map(cartItem => cartItem.length));

    return (
        <div className={style.container}>
            <h4 className={style.headText}>Корзина</h4>
            <div className={style.cartBlock}>
                {cartBook.map(cartItem => cartItem.map(cartBook => <CartItem key={cartBook.id} cartBook={cartBook} />))
                }
            </div>
        </div>
    )
}

export default Cart