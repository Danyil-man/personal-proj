import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { skeletonArr } from '../../consts/generalConsts';
import { AppStateType } from '../../store/redux/store';
import Card from '../card/Card';
import SkeletonLoader from '../common/SkeletonLoader/SkeletonLoader';
import style from './Cards.module.scss'

type CardsType = {
    searchBook: string
}

const Cards: FC<CardsType> = ({ searchBook }) => {
    const { books, isLoading } = useSelector((state: AppStateType) => state.books)

    return (
        <div className={style.container}>
            {isLoading ? skeletonArr.map((item, index) => <SkeletonLoader key={index} />) :
                books.filter((book) => book.name.includes(searchBook))
                    .map(book => <Card key={book.id} book={book} />)}
        </div>
    )
}

export default Cards