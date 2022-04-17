import React, { FC } from 'react';
import { bookType } from '../../types/generaTypes';
import style from './Card.module.scss';

type CardType = {
    book: bookType
}

const Card: FC<CardType> = ({ book }) => {
    return (
        <div className={style.card}>
            <div className={style.cardInner}>
                <img src={book.image} alt="book-img" />
                <div className={style.infoBlock}>
                    <h6>{book.name}</h6>
                </div>
            </div>


        </div>
    )
}

export default Card