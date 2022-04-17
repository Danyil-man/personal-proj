import React, { FC } from 'react';
import { bookType } from '../../types/generaTypes';
import style from './Card.module.scss';

type CardType = {
    book: bookType
}

const Card: FC<CardType> = ({ book }) => {
    return (
        <div className={style.card}>
            <div className={style.img}>
                <img width={160px} src={book.image} alt="book-img" />
            </div>
        </div>
    )
}

export default Card