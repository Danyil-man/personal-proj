import React, { FC } from 'react';
import { Cart2, Heart } from 'react-bootstrap-icons';
import style from '../../components/card/Card.module.scss';
import { FavoriteBookType, FavoriteItem } from '../../types/generalTypes';

type FavoriteType = {
    favorite: FavoriteItem
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

    return (
        <div className={style.card}>
            <div className={style.imgBlock}>
                <img src={`http://localhost:5000/${favorite.favoriteBook.image}`} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6>{favorite.favoriteBook.name}</h6>
                <p>Автор: {favorite.favoriteBook.author}</p>
                <p>Жанр: {obj[favorite.favoriteBook.genreId]}</p>
            </div>

            <div className={style.interactBlock}>
                <p>Ціна: {favorite.favoriteBook.price}грн.</p>
                <div className='d-flex'>
                    <Heart className={`mr-4 ${style.icon}`} size={20} />
                    <Cart2 size={20} className={`${style.icon}`} />
                </div>
            </div>
        </div>


    )
}

export default FavoriteCard