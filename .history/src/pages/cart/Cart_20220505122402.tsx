import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../../store/redux/reducers/cartReducer';
import { AppStateType } from '../../store/redux/store';
import CartItem from './CartItem';
import style from './Cart.module.scss'
import { CartBookType } from '../../types/generalTypes';

const Cart = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { cart, deleteId } = useSelector((state: AppStateType) => state.cart)
    const cartBook = cart.map(cartItem => cartItem.cart_books)
    const cartItem = cartBook.map(cartItem => cartItem)
    const cartLength = cartBook.map(cartItem => cartItem.length)
    const bookPrice = cartBook.map(cartItem => cartItem.map(cartItem => cartItem.book))
    const totalPrice = () => {
        const cartPrice = cartItem.reduce((sum: number, book: CartBookType) => book.price + sum, 0)
        return { cartPrice }
    }

    useEffect(() => {
        dispatch(getAllCart(id))
    }, [deleteId])


    return (
        <div className={style.container}>
            <h4 className={style.headText}>Моя корзина</h4>
            <div className={style.cartBlock}>
                {cartBook.map(cartItem => cartItem.map(cartBook => <CartItem key={cartBook.id} cartBook={cartBook} />))
                }
            </div>
            <div className={style.cartFooter}>
                <p className={style.cartCount}>Кількість товарів в корзині: {cartLength}</p>
                <p className={style.cartCount}>Загальна сума: {cartLength}</p>
            </div>
        </div>
    )
}

export default Cart