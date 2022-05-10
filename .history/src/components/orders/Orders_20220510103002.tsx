import React, { FC } from 'react';
import { author, dataPuchase, genre, price } from '../../consts/bookInfo';
import { uah } from '../../consts/currency';
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
                <p className={style.subItems}>{author} {item.book.author}</p>
                <p className={style.subItems}>{genre} {genreObj[item.book.genreId]}</p>
                <p className={style.subItems}>{price} {item.book.price}{uah}</p>
                {/* <p className={style.subItems}>{dataPuchase} {item.createdAt} </p> */}
            </div>
        </div>
    )
}
export default Orders