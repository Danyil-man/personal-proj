import React, { FC, useEffect, useState } from 'react';
import { Cart2, Heart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { author, genre, price } from '../../consts/bookInfo';
import { uah } from '../../consts/currency';
import { noAvaliable } from '../../consts/generalConsts';
import { genreObj } from '../../consts/genre';
import OpenedBookModal from '../../modals/OpenedBookModal/OpenedBookModal';
import { addBookCart } from '../../store/redux/reducers/cartReducer';
import { addFavorite } from '../../store/redux/reducers/favoriteReducer';
import { AppStateType } from '../../store/redux/store';
import { bookType } from '../../types/generalTypes';
import style from './Card.module.scss';

type CardType = {
    book: bookType
}

const Card: FC<CardType> = ({ book }) => {
    const [openBookModal, setOpenBookModal] = useState(false)
    const dispatch = useDispatch()
    const { id } = useSelector((state: AppStateType) => state.user.user)
    const addBookToFavorite = (idBook: number, e: any) => {
        e.stopPropagation()
        dispatch(addFavorite(id, idBook))
    }
    const addBookToCart = (idBook: number, e: any) => {
        e.stopPropagation()
        dispatch(addBookCart(id, idBook))
    }

    return (<>
        <div className={`${style.card} ${book.count === 0 ? style.disabled : ''} `} onClick={() => setOpenBookModal(!openBookModal)}>
            <div className={style.imgBlock}>
                <img src={`http://localhost:5000/${book.image}`} alt="book-img" />
            </div>
            <div className={style.infoBlock}>
                <h6 className={style.authorName}>{book.name}</h6>
                <p className={style.descText}>{author} {book.author}</p>
                <p className={style.descText}>{genre} {genreObj[book.genreId]}</p>
            </div>

            <div className={style.interactBlock}>
                <p className={style.priceBlock}>{book.count !== 0 ? `${price} ${book.price}${uah}` : noAvaliable} </p>
                <div className='d-flex'>
                    <Heart onClick={(e: any) => addBookToFavorite(book.id, e)} className={style.icon} />
                    <Cart2 onClick={(e: any) => addBookToCart(book.id, e)} className={style.icon} />
                </div>
            </div>
        </div>
        {openBookModal && <OpenedBookModal book={book} closeModal={openBookModal} onClose={setOpenBookModal} />}

    </>



    )
}

export default Card