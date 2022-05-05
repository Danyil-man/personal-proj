import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../../store/redux/reducers/cartReducer';
import { AppStateType } from '../../store/redux/store';
import CartItem from './CartItem';
import style from './Cart.module.scss'
import { CartBookType, CartType } from '../../types/generalTypes';
import BuyModal from '../../modals/buyModal/BuyModal';

const Cart = () => {
    const dispatch = useDispatch()
    const [isBuy, setIsBuy] = useState(false)
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { cart, deleteId } = useSelector((state: AppStateType) => state.cart)
    const { cartId } = useSelector((state: AppStateType) => state.order)
    const cartBook = cart.map(cartItem => cartItem.cart_books)
    const cartLength = cartBook.map(cartItem => cartItem.length)
    const userCartId = cartBook.map(cartItem => cartItem.map(cartBook => cartBook.cartId))
    const totalPrice = () => {
        const cartPrice = cartBook.map(cartItem => cartItem.reduce((sum: number, book: CartType) => book.book.price + sum, 0))
        return { cartPrice }
    }
    const { cartPrice } = totalPrice()

    useEffect(() => {
        dispatch(getAllCart(id))
    }, [deleteId, cartId])
    console.log(userCartId[0][0]);


    return (
        <div className={style.container}>
            <h4 className={style.headText}>Моя корзина</h4>
            <div className={style.cartBlock}>
                {cartBook.map(cartItem => cartItem.map(cartBook => <CartItem key={cartBook.id} cartBook={cartBook} />))
                }
            </div>
            <div className={style.cartFooter}>
                <div className={style.infoBlock}>
                    <p className={style.cartInfoItem}>Кількість товарів в корзині: <span className={style.counter}>{cartLength}</span></p>
                    <p className={style.cartInfoItem}>Загальна сума: <span className={style.counter}>{cartPrice}</span></p>
                </div>
                <button onClick={() => setIsBuy(true)} className={style.buyBtn}>Оформити замовлення</button>
            </div>
            {isBuy && <BuyModal show={isBuy} onHide={() => setIsBuy(false)} />}
        </div>
    )
}

export default Cart