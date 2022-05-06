import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../../routings/pathVariables';
import style from './EmptyBlock.module.scss'


const EmptyBlock = () => {
    const navigate = useNavigate()
    return (
        <div className={style.emptyBlock}>
            <div className={style.emptyCartBlock}>
                <div className={style.imgBlock}>
                    <img className={style.image} src="https://res.cloudinary.com/wunu/image/upload/v1651844844/personalproject/empty-cart_oesvoo.png" alt="empty-cart" />
                </div>
                <h4 className={style.title}>Ваша корзина пуста</h4>
                <h6 className={style.subTitle} >Перейдіть на головну, щоб замовити товар.</h6>
                <button className={style.homeBtn} onClick={() => navigate(HOME_ROUTE)}>На головну</button>
            </div>
        </div>
    )
}

export default EmptyBlock