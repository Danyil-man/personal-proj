import React, { FC } from 'react';
import { bookType } from '../../types/generaTypes';
import style from './Card.module.scss';

type CardType = {
    book: bookType
}

const Card: FC<CardType> = ({ book }) => {
    return (
        <div className={style.card}>
            <img src={book.image} alt="book-img" />
            <h6>{book.name}</h6>
        </div>
    )
}

export default Card