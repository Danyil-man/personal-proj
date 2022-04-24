import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OpenedBookModal from '../../modals/OpenedBookModal/OpenedBookModal';
import { AppStateType } from '../../store/redux/store';
import Card from '../card/Card';
import style from './Cards.module.scss'

const Cards = () => {
    const [openBookModal, setOpenBookModal] = useState(true)
    const books = useSelector((state: AppStateType) => state.books.books)
    return (
        <div className={style.container}>
            {books.map(book => <Card key={book.id} book={book} />)}
            {openBookModal && <OpenedBookModal close={openBookModal} onClose={setOpenBookModal} />}
        </div>
    )
}

export default Cards