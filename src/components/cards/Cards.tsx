import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import Card from '../card/Card';
import style from './Cards.module.scss'

const Cards = () => {
    const books = useSelector((state: AppStateType) => state.books.books)
    return (
        <div className={style.container}>
            {books.map(book => <Card key={book.id} book={book} />)}
        </div>
    )
}

export default Cards