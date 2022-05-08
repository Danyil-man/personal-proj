import React, { FC, useEffect } from 'react';
import { Cart2, Heart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import style from './Favorite.module.scss'
import { addBookCart } from '../../store/redux/reducers/cartReducer';
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
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const deleteFavorite = (favoriteId: number) => {
        dispatch(removeFavorite(favoriteId))
    }
    const addBookToCart = (idBook: number) => {
        dispatch(addBookCart(id, idBook))
    }

    return (
        <div className={style.card}>
            <div className={style.imgBlock}>
                <img src={`http://localhost:5000/${favorite.image}`} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6>{favorite.name}</h6>
                <p> {favorite.author}</p>
                <p>Жанр: {obj[favorite.genreId]}</p>
            </div>

            <div className={style.interactBlock}>
                <p className={style.price}>Ціна: {favorite.price}грн.</p>
                <div className='d-flex'>
                    <Heart onClick={() => deleteFavorite(favoriteId)} color='red' className={style.icon} />
                    <Cart2 onClick={() => addBookToCart(favorite.id)} className={style.icon} />
                </div>
            </div>
        </div>


    )
}

export default FavoriteCard