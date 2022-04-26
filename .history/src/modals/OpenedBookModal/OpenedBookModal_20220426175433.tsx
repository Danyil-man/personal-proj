import React, { FC } from 'react';
import { Button, CloseButton, Modal } from 'react-bootstrap';
import { CloudSlash } from 'react-bootstrap-icons';
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
                    <h4 className={style.nameBook}>{book.name}</h4>
                    <p className={style.bookAuthor}>Автор: {book.author}</p>
                    <p className={style.bookPrice}>Ціна: {book.price}</p>
                    <div className={style.interactBlock}>
                        <button className={style.closeBtn} onClick={() => onClose(!close)}>Закрити</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OpenedBookModal