import React, { FC } from 'react';
import { EraserFill, Search } from 'react-bootstrap-icons';
import style from './SearchBook.module.scss'

type SearchBookType = {
    searchBook: string
    setSearchBook: (searchBook: string) => void
}

const SearchBook: FC<SearchBookType> = ({ searchBook, setSearchBook }) => {

    return (
        <div className={style.container}>
            <h3 className={style.leftText}>{searchBook ? `Шукаємо: '${searchBook}'` : 'Усі Книги'}</h3>
            <div className={style.searchBookBlock}>
                <input maxLength={35} className={style.bookNameValue}
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