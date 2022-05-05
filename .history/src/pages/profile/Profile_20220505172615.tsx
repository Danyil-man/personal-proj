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
    const orderItems = orders.map(order => order.cart_books)
    const orderLength = orderItems.map(orderLength => orderLength.length)
    useEffect(() => {
        dispatch(getAllOrders(id))
    }, [])
    console.log(orderLength);

    return (
        <div className={style.container}>
            <h4 className={style.headText}>Мої замовлення</h4>
            <p>Всього замовлених товарів: {orderLength}</p>
            <div className={style.ordersBlock}>
                {orderItems.map(order => order.map(item => <Orders key={item.id} item={item} />))}
            </div>
        </div>
    )
}

export default Profile