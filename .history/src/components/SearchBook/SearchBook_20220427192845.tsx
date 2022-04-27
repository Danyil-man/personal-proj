import React, { FC, useState } from 'react';
import { DashCircleDotted, Search } from 'react-bootstrap-icons';
import style from './SearchBook.module.scss'

type SearchBookType = {
    searchBook: string
    setSearchBook: (value: string) => void
}

const SearchBook: FC<SearchBookType> = ({ searchBook, setSearchBook }) => {
    return (
        <div className={style.container}>
            <h1>{searchBook ? `Search on: '${searchBook}'` : 'Усі Книги'}</h1>
            <div className={style.searchBookBlock}>
                <Search />

                <input className={style.bookNameValue}
                    onChange={(e) => {
                        setSearchBook(e.target.value);
                    }}
                    value={searchBook}
                    placeholder="Search..."
                />
                {searchBook ? (
                    <DashCircleDotted
                        onClick={() => setSearchBook('')}
                        className={style.clearSearchBtn}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default SearchBook;