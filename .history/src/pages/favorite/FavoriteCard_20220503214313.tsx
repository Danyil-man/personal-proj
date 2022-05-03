import React, { FC } from 'react';
import { Cart2, Heart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../components/card/Card.module.scss';
import { removeFavorite } from '../../store/redux/reducers/favoriteReducer';
import { AppStateType } from '../../store/redux/store';
import { FavoriteBookType } from '../../types/generalTypes';

type FavoriteType = {
    favorite: FavoriteBookType
    favoriteId: number
}

const obj: any = {
    1: 'Фантастика',
    2: 'Історія',
    3: 'Наукова література',
    4: 'Роман',
    5: 'Детектив',
    6: 'Бізнес',
};
const FavoriteCard: FC<FavoriteType> = ({ favorite, favoriteId }) => {
    console.log('FavId', favoriteId)
    const dispatch = useDispatch()
    const deleteFavorite = (favoriteId: number) => {
        dispatch(removeFavorite(favoriteId))
    }
    return (
        <div className={style.card}>
            <div className={style.imgBlock}>
                <img src={`http://localhost:5000/${favorite.image}`} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6>{favorite.name}</h6>
                <p>Автор: {favorite.author}</p>
                <p>Жанр: {obj[favorite.genreId]}</p>
            </div>

            <div className={style.interactBlock}>
                <p>Ціна: {favorite.price}грн.</p>
                <div className='d-flex'>
                    <Heart color='red' className={`mr-4 ${style.icon}`} size={20} />
                    <Cart2 size={20} className={`${style.icon}`} />
                </div>
            </div>
        </div>


    )
}

export default FavoriteCard