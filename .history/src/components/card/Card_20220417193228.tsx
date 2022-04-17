import React, { FC } from 'react';
import { bookType } from '../../types/generaTypes';
import style from './Card.module.scss';

type CardType = {
    book: bookType
}

const Card: FC<CardType> = ({ book }) => {
    return (
        <div className={style.card}>
            <img width={200} height={630} src={book.image} alt="book-img" />
        </div>
    )
}

export default Card