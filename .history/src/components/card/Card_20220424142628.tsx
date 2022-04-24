import React, { FC } from 'react';
import { Cart2, Heart } from 'react-bootstrap-icons';
import { bookType } from '../../types/generalTypes';
import style from './Card.module.scss';

type CardType = {
    book: bookType
}

const Card: FC<CardType> = ({ book }) => {
    return (
        <div className={style.card}>

            <div className={style.imgBlock}>
                <img src={`http://localhost:5000/${book.image}`} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6>{book.name}</h6>
                <p>Автор: {book.author}</p>
                <p>Жанр: {book.genreId}</p>
            </div>

            <div className={style.interactBlock}>
                <p>Ціна: {book.price}</p>
                <div className='d-flex'>
                    <Heart className={`mr-4 ${style.icon}`} size={20} />
                    <Cart2 size={20} className={`${style.icon}`} />
                </div>
            </div>

        </div>
    )
}

export default Card