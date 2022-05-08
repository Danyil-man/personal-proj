import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyBlock from '../../components/common/emptyItemBlock/EmptyBlock';
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

    return (
        <div className={orderLength[0] ? style.container : style.phoneContainer}>
            <h4 className={style.headText}>{ }</h4>
            {orderLength[0] ? <>
                <p className={style.orderInfo}>Всього було замовлено товарів: {orderLength[0]}</p>
                <div className={style.ordersBlock}>
                    {orderItems.map(order => order.map(item => <Orders key={item.id} item={item} />))}
                </div>
            </> : <EmptyBlock title={'Ви ще не робили замовлень'} subTitle={'Перейдіть в корзину, щоб зробити замовлення.'} image={'https://res.cloudinary.com/wunu/image/upload/v1652028186/personalproject/Lovepik_com-401603043-online-shopping-vector-elements_wnj9hd.png'} />}

        </div>
    )
}

export default Profile