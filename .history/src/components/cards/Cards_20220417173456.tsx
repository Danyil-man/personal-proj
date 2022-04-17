import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './Cards.module.scss'

const Cards = () => {
    const books = useSelector((state: AppStateType) => state.books.books)
    return (
        <div className={style.container}>

        </div>
    )
}

export default Cards