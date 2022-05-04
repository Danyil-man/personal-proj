import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavorites } from '../../store/redux/reducers/favoriteReducer';
import { AppStateType } from '../../store/redux/store';
import style from './Favorite.module.scss'
import FavoriteCard from './FavoriteCard';


const Favorite = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { favorites, favoriteId } = useSelector((state: AppStateType) => state.favorite)
    useEffect(() => {
        dispatch(getAllFavorites(id))
    }, [favoriteId])
    return (
        <div className={style.container}>
            <h4 className={style.headText}>Обрані книги</h4>
            <div className={style.favoriteBlock}>
                {favorites.map((favorite) =>
                    <FavoriteCard
                        key={favorite.id}
                        favoriteId={favorite.id}
                        favorite={favorite.book} />)
                }
            </div>
        </div>
    )
}

export default Favorite