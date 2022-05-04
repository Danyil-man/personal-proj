import React, { FC } from 'react';
import { CloseButton } from 'react-bootstrap';
import { Cart2, CloudSleet, XCircle } from 'react-bootstrap-icons';
import { CartType } from '../../types/generalTypes';
import style from './CartItem.module.scss'

type CartItemType = {
    cartBook: CartType
}

const CartItem: FC<CartItemType> = ({ cartBook }) => {
    const obj: any = {
        1: 'Фантастика',
        2: 'Історія',
        3: 'Наукова література',
        4: 'Роман',
        5: 'Детектив',
        6: 'Бізнес',
    };
    return (
        <div className={style.card}>
            <div className={style.imgBlock}>
                <img src={`http://localhost:5000/${cartBook.book.image}`} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6>{cartBook.book.name}</h6>
                <p>Автор: {cartBook.book.author}</p>
                <p>Жанр: {obj[cartBook.book.genreId]}</p>
            </div>

            <div className={style.interactBlock}>
                <p>{cartBook.book.price}грн.</p>
            </div>
            <div className={style.closeBlock}>
                <XCircle size={20} />
            </div>
        </div>
    )
}

export default CartItem