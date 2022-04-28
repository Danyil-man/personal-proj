import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import OpenedBookModal from '../../modals/OpenedBookModal/OpenedBookModal';
import { AppStateType } from '../../store/redux/store';
import Card from '../card/Card';
import SkeletonLoader from '../common/SkeletonLoader/SkeletonLoader';
import style from './Cards.module.scss'

type CardsType = {
    searchBook: string
    filterByNameASC: (name: string) => void
}

const Cards: FC<CardsType> = ({ searchBook, filterByNameASC }) => {

    const { books, isLoading, filterByAsc } = useSelector((state: AppStateType) => state.books)
    return (
        <div className={style.container}>
            <button onClick={() => filterByNameASC(filterByAsc)}>Filter by ASC</button>
            {isLoading ? Array(10).fill(<SkeletonLoader />) :
                books.filter((book) => book.name.includes(searchBook))
                    .map(book => <Card key={book.id} book={book} />)}
        </div>
    )
}

export default Cards