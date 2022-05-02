import React, { FC } from 'react';
import { Cart2, Heart } from 'react-bootstrap-icons';
import style from '../../components/card/Card.module.scss';
import { FavoriteBookType } from '../../types/generalTypes';

type FavoriteType = {
    favorite: any
}

const obj: any = {
    1: 'Фантастика',
    2: 'Історія',
    3: 'Наукова література',
    4: 'Роман',
    5: 'Детектив',
    6: 'Бізнес',
};
const FavoriteCard: FC<FavoriteType> = ({ favorite }) => {
    console.log('FAVORITE', favorite)
    return (
        <div className={style.card}>
            <div className={style.imgBlock}>
                <img src={`http://localhost:5000/${favorite.bookItem.image}`} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6>{favorite.bookItem.name}</h6>
                <p>Автор: {favorite.bookItem.author}</p>
                <p>Жанр: {obj[favorite.bookItem.genreId]}</p>
            </div>

            <div className={style.interactBlock}>
                <p>Ціна: {favorite.bookItem.price}грн.</p>
                <div className='d-flex'>
                    <Heart className={`mr-4 ${style.icon}`} size={20} />
                    <Cart2 size={20} className={`${style.icon}`} />
                </div>
            </div>
        </div>


    )
}

export default FavoriteCard