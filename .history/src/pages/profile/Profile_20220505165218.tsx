import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Orders from '../../components/orders/Orders';
import { getAllOrders } from '../../store/redux/reducers/orderReducer';
import { AppStateType } from '../../store/redux/store';
import style from './Profile.module.scss'

const Profile = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { orders } = useSelector((state: AppStateType) => state.order)
    const orderItems = orders.map(order => order.userCart.cart_books.map(orderCart => orderCart))
    useEffect(() => {
        dispatch(getAllOrders(id))
    }, [])
    console.log(orderItems);

    return (
        <div className={style.container}>
            <h4 className={style.headText}>Мої замовлення</h4>
            <div className={style.ordersBlock}>
                {orderItems}
            </div>
        </div>
    )
}

export default Profile