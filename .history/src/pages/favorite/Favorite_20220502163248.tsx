import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllFavorites } from '../../store/redux/reducers/favoriteReducer';
import style from './Favorite.module.scss'


const Favorite = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getAllFavorites()
    }, [])
    return (
        <div>Favorite</div>
    )
}

export default Favorite