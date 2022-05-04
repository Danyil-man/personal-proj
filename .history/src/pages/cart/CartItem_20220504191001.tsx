import React, { FC } from 'react';
import { CloseButton } from 'react-bootstrap';
import { Cart2, CloudSleet, XCircle } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { removeBookCart } from '../../store/redux/reducers/cartReducer';
import { CartType } from '../../types/generalTypes';
import style from './CartItem.module.scss'

type CartItemType = {
    cartBook: CartType
}

const CartItem: FC<CartItemType> = ({ cartBook }) => {
    const dispatch = useDispatch()
    const deleteCartBook = (bookId: number) => {
        dispatch(removeBookCart(bookId))
    }
    const obj: any = {
        1: 'Фантастика',
        2: 'Історія',
        3: 'Наукова література',
        4: 'Роман',
        5: 'Детектив',
        6: 'Бізнес',
    };
    return (
        <div className={style.card}>
            <div className={style.leftSide}>
                <div className={style.imgBlock}>
                    <img src={`http://localhost:5000/${cartBook.book.image}`} alt="book-img" />
                </div>
                <div className={style.infoBlock}>
                    <h6>{cartBook.book.name}</h6>
                    <p>Автор: {cartBook.book.author}</p>
                    <p>Жанр: {obj[cartBook.book.genreId]}</p>
                </div>
            </div>
            <div className={style.rightSide}>
                <div className={style.interactBlock}>
                    <p>{cartBook.book.price}грн.</p>
                </div>
                <div className={style.closeBlock}>
                    <XCircle onClick={() => deleteCartBook(cartBook.id)} role='button' size={25} />
                </div>
            </div>

        </div>
    )
}

export default CartItem