import React, { FC, useState } from 'react';
import { ArrowsCollapse, CalendarCheckFill, CircleFill, CircleSquare, DashCircleDotted, Search, SkipForwardCircle, SlashCircle, StopCircle } from 'react-bootstrap-icons';
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
                <Search />

                <input className={style.bookNameValue}
                    onChange={(e) => {
                        setSearchBook(e.target.value);
                    }}
                    value={searchBook}
                    placeholder="Пошук..."
                />
                {searchBook ? (
                    <CalendarCheckFill
                        onClick={() => setSearchBook('')}
                        className={style.clearSearchBtn}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default SearchBook;