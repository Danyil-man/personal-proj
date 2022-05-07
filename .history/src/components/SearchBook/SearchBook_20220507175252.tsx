import React, { FC } from 'react';
import { EraserFill, Search } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './SearchBook.module.scss'

type SearchBookType = {
    searchBook: string
    setSearchBook: (searchBook: string) => void
}

const SearchBook: FC<SearchBookType> = ({ searchBook, setSearchBook }) => {
    const { filteredBook } = useSelector((state: AppStateType) => state.books)
    return (
        <div className={style.container}>
            <h3 className={style.leftText}>{searchBook ? `Шукаємо: '${filteredBook}'` : 'Усі Книги'}</h3>
            <div className={style.searchBookBlock}>
                <Search />

                <input maxLength={45} className={style.bookNameValue}
                    onChange={(e) => {
                        setSearchBook(e.target.value);
                    }}
                    value={searchBook}
                    placeholder="Пошук..."
                />
                {searchBook ? (
                    <EraserFill
                        onClick={() => setSearchBook('')}
                        className={style.clearSearchBtn}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default SearchBook;