import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import OpenedBookModal from '../../modals/OpenedBookModal/OpenedBookModal';
import { AppStateType } from '../../store/redux/store';
import Card from '../card/Card';
import SkeletonLoader from '../common/SkeletonLoader/SkeletonLoader';
import style from './Cards.module.scss'

type CardsType = {
    searchBook: string
}

const Cards: FC<CardsType> = ({ searchBook }) => {
    const { books, isLoading } = useSelector((state: AppStateType) => state.books)
    const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className={style.container}>
            {isLoading ? skeletonArr.map((item, index) => <SkeletonLoader key={index} />) :
                books.filter((book) => book.name.includes(searchBook))
                    .map(book => <Card key={book.id} book={book} />)}
        </div>
    )
}

export default Cards