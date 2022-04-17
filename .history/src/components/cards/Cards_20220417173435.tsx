import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './Cards.module.scss'

const Cards = () => {
    const books = useSelector((state: AppStateType) => state.books.books)
    console.log(books)
    return (
        <div className={style.container}>

        </div>
    )
}

export default Cards