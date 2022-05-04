import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../../store/redux/reducers/cartReducer';
import { AppStateType } from '../../store/redux/store';
import style from './Cart.module.scss'
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { cart } = useSelector((state: AppStateType) => state.cart)
    useEffect(() => {
        dispatch(getAllCart(id))
    }, [])
    console.log(cart.map(cartItem => cartItem.cart_books.map(cartBook => cartBook.bookId)))
    return (
        <div className={style.container}>
            <h4 className={style.headText}>Корзина</h4>
            <div className={style.favoriteBlock}>
                {/* {cart.map((cartItem) => <CartItem/>)
                } */}
            </div>
        </div>
    )
}

export default Cart