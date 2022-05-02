import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavorites } from '../../store/redux/reducers/favoriteReducer';
import { AppStateType } from '../../store/redux/store';
import style from './Favorite.module.scss'
import FavoriteCard from './FavoriteCard';


const Favorite = () => {
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { favorites } = useSelector((state: AppStateType) => state.favorite)
    useEffect(() => {
        dispatch(getAllFavorites(id))
    }, [])
    console.log(favorites)

    return (
        <div className={style.container}>
            {favorites.map(favorite => <FavoriteCard key={favorite.favoriteItem.id} favorite={favorite.favoriteItem.favoriteBook} />)}
        </div>
    )
}

export default Favorite