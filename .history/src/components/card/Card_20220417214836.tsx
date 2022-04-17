import React, { FC } from 'react';
import { Cart2, Heart } from 'react-bootstrap-icons';
import { bookType } from '../../types/generaTypes';
import style from './Card.module.scss';

type CardType = {
    book: bookType
}

const Card: FC<CardType> = ({ book }) => {
    return (
        <div className={style.card}>

            <div className={style.imgBlock}>
                <img src={book.image} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6>{book.name}</h6>
                <p>Автор: {book.author}</p>
                <p>Жанр: {book.genre}</p>
            </div>

            <div className={style.interactBlock}>
                <p>Ціна: {book.price}</p>
                <div className='d-flex'>
                    <Heart />
                    <Cart2 />
                </div>
            </div>

        </div>
    )
}

export default Card