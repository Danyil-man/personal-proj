import React, { FC } from 'react';
import { genreObj } from '../../consts/genre';
import { UserCartItemsType } from '../../types/generalTypes';
import style from './Orders.module.scss'

type OrderType = {
    item: UserCartItemsType
}

const Orders: FC<OrderType> = ({ item }) => {

    return (
        <div className={style.card}>
            <div className={style.imgBlock}>
                <img src={`http://localhost:5000/${item.book.image}`} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6 className={style.bookName}>{item.book.name}</h6>
                <p className={style.subItems}>Автор: {item.book.author}</p>
                <p className={style.subItems}>Жанр: {genreObj[item.book.genreId]}</p>
                <p className={style.subItems}>Ціна: {item.book.price}грн.</p>
                <p className={style.subItems}>Дата покупки: {item.createdAt.split('')}</p>
            </div>
        </div>
    )
}
export default Orders