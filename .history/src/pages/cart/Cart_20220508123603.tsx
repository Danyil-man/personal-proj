import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart } from '../../store/redux/reducers/cartReducer';
import { AppStateType } from '../../store/redux/store';
import CartItem from './CartItem';
import style from './Cart.module.scss'
import { CartBookType, CartType } from '../../types/generalTypes';
import BuyModal from '../../modals/buyModal/BuyModal';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../routings/pathVariables';
import EmptyBlock from '../../components/common/emptyItemBlock/EmptyBlock';


const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isBuy, setIsBuy] = useState(false)
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { cart, deleteId } = useSelector((state: AppStateType) => state.cart)
    const { success } = useSelector((state: AppStateType) => state.order)
    const cartBook = cart.map(cartItem => cartItem.cart_books)
    const cartLength = cartBook.map(cartItem => cartItem.length)
    const userCartId = cartBook.map(cartItem => cartItem.map(cartBook => cartBook.cartId))
    const totalPrice = () => {
        const cartPrice = cartBook.map(cartItem => cartItem.reduce((sum: number, book: CartType) => book.book.price + sum, 0))

        return { cartPrice }
    }
    const { cartPrice } = totalPrice()
    const totalCartPrice = cartPrice[0]

    useEffect(() => {
        dispatch(getAllCart(id))
    }, [deleteId, success])

    return (
        <div className={cartLength[0] ? style.container : style.phoneContainer}>
            <h3 className={style.headText}>Моя корзина</h3>
            {cartLength[0] ?
                <>
                    <div className={style.cartBlock}>
                        {cartBook.map(cartItem => cartItem.map(cartBook => <CartItem key={cartBook.id} cartBook={cartBook} />))
                        }
                    </div>
                    <div className={style.cartFooter}>
                        <div className={style.infoBlock}>
                            <p className={style.cartInfoItem}>Кількість товарів в корзині: <span className={style.counter}>{cartLength[0] ? cartLength[0] : 0}</span></p>
                            <p className={style.cartInfoItem}>Загальна сума: <span className={style.counter}>{totalCartPrice ? totalCartPrice : 0}</span>грн.</p>
                        </div>
                        <button onClick={() => setIsBuy(true)} className={style.buyBtn}>Купити</button>
                    </div>
                </> : <EmptyBlock
                    title={'Ваша корзина пуста'}
                    subTitle={'Перейдіть на головну, щоб замовити товар.'}
                    image={'https://res.cloudinary.com/wunu/image/upload/v1652002538/personalproject/Lovepik_com-400499244-shopping-cart_n0cdns.png'} />
            }


            {isBuy && <BuyModal
                show={isBuy}
                onHide={() => setIsBuy(false)} cartId={userCartId[0][0]} totalCartPrice={totalCartPrice}
                orders={cartBook.map(cartItem => cartItem)}
            />}
        </div>
    )
}

export default Cart