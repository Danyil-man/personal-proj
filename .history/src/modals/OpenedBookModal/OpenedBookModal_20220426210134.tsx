import React, { FC } from 'react';
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
                    <div className={style.blockDescription}>
                        <p className={style.bookDescription}>Опис: {book.description}</p>
                    </div>
                    <div className={style.interactBlock}>
                        <p className={style.bookPrice}>Ціна: {book.price}грн.</p>
                        <button className={style.closeBtn} onClick={() => onClose(!close)}>Закрити</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OpenedBookModal