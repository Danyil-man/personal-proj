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
    const cartBook = cart.map(cartItem => cartItem.cart_books)
    useEffect(() => {
        dispatch(getAllCart(id))
    }, [])
    console.log('Cart', cartBook);

    return (
        <div className={style.container}>
            <h4 className={style.headText}>Корзина</h4>
            <div className={style.favoriteBlock}>
                {cartBook.map((cartItem) => <CartItem key={1} cartItem={cartItem} />)
                }
            </div>
        </div>
    )
}

export default Cart