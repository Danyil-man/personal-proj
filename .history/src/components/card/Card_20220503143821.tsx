import React, { FC, useEffect, useState } from 'react';
import { Cart2, Heart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import OpenedBookModal from '../../modals/OpenedBookModal/OpenedBookModal';
import { addFavorite } from '../../store/redux/reducers/favoriteReducer';
import { AppStateType } from '../../store/redux/store';
import { bookType } from '../../types/generalTypes';
import style from './Card.module.scss';

type CardType = {
    book: bookType
}

const obj: any = {
    1: 'Фантастика',
    2: 'Історія',
    3: 'Наукова література',
    4: 'Роман',
    5: 'Детектив',
    6: 'Бізнес',
};

const Card: FC<CardType> = ({ book }) => {
    const [openBookModal, setOpenBookModal] = useState(false)
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const { isFavorited } = useSelector((state: AppStateType) => state.favorite)
    const addBookToFavorite = (idBook: number, e: any) => {
        e.stopPropagation()
        dispatch(addFavorite(id, idBook))
    }
    return (
        <>
            <div className={style.card} onClick={() => setOpenBookModal(!openBookModal)}>
                <div className={style.imgBlock}>
                    <img src={`http://localhost:5000/${book.image}`} alt="book-img" />
                </div>
                <div className={style.infoBlock}>
                    <h6>{book.name}</h6>
                    <p>Автор: {book.author}</p>
                    <p>Жанр: {obj[book.genreId]}</p>
                </div>

                <div className={style.interactBlock}>
                    <p>Ціна: {book.price}грн.</p>
                    <div className='d-flex'>
                        <Heart onClick={(e: any) => addBookToFavorite(book.id, e)} className={`mr-4 ${style.icon}`} size={20} />
                        <Cart2 size={20} className={`${style.icon}`} />
                    </div>
                </div>
            </div>
            {openBookModal && <OpenedBookModal book={book} close={openBookModal} onClose={setOpenBookModal} />}
        </>

    )
}

export default Card