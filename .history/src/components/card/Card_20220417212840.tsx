import React, { FC } from 'react';
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
                <p>Жано: {book.genre}</p>
            </div>



        </div>
    )
}

export default Card