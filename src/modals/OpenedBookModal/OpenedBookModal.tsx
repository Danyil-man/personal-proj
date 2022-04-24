import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { bookType } from '../../types/generalTypes';
import style from './OpenedBookModal.module.scss'

type OpenBookModalType = {
    close: boolean
    onClose: (close: boolean) => void
    book: bookType
}


const OpenedBookModal: FC<OpenBookModalType> = ({ close, book, onClose }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.imgBlock}>
                    <img src={`http://localhost:5000/${book.image}`} alt="book-img" />
                </div>
                <div className={style.infoBlock}>
                    <h6>{book.name}</h6>
                    <p>Автор: {book.author}</p>
                    <p>Жанр: {book.genreId}</p>
                </div>
                <button onClick={() => onClose(!close)}>X</button>
                <div className={style.interactBlock}>
                    <p>Ціна: {book.price}</p>
                    {/* <div className='d-flex'>
                    <Heart className={`mr-4 ${style.icon}`} size={20} />
                    <Cart2 size={20} className={`${style.icon}`} />
                </div> */}
                </div>
            </div>
        </div>

    )
}

export default OpenedBookModal