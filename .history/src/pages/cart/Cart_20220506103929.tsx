import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../../store/redux/reducers/cartReducer';
import { AppStateType } from '../../store/redux/store';
import CartItem from './CartItem';
import style from './Cart.module.scss'
import { CartBookType, CartType } from '../../types/generalTypes';
import BuyModal from '../../modals/buyModal/BuyModal';
import { totalPrice } from '../../hook/hookPrice';

const Cart = () => {
    const dispatch = useDispatch()
    const [isBuy, setIsBuy] = useState(false)
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { cart, deleteId } = useSelector((state: AppStateType) => state.cart)
    const { success } = useSelector((state: AppStateType) => state.order)
    const cartBook = cart.map(cartItem => cartItem.cart_books)
    const cartLength = cartBook.map(cartItem => cartItem.length)
    const userCartId = cartBook.map(cartItem => cartItem.map(cartBook => cartBook.cartId))
    const { cartPrice } = totalPrice()
    useEffect(() => {
        dispatch(getAllCart(id))
    }, [deleteId, success])


    return (
        <div className={style.container}>
            <h4 className={style.headText}>Моя корзина</h4>
            <div className={style.cartBlock}>
                {cartBook.map(cartItem => cartItem.map(cartBook => <CartItem key={cartBook.id} cartBook={cartBook} />))
                }
            </div>
            <div className={style.cartFooter}>
                <div className={style.infoBlock}>
                    <p className={style.cartInfoItem}>Кількість товарів в корзині: <span className={style.counter}>{cartLength[0] ? cartLength[0] : 0}</span></p>
                    {/* <p className={style.cartInfoItem}>Загальна сума: <span className={style.counter}>{cartPrice[0] ? cartPrice[0] : 0}</span></p> */}
                </div>
                <button onClick={() => setIsBuy(true)} className={style.buyBtn}>Оформити замовлення</button>
            </div>
            {isBuy && <BuyModal show={isBuy} onHide={() => setIsBuy(false)} cartId={userCartId[0][0]} />}
        </div>
    )
}

export default Cart