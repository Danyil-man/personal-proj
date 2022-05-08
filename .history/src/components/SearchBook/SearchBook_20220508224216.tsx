import React, { FC } from 'react';
import { EraserFill } from 'react-bootstrap-icons';
import { allBooks, searchingOn } from '../../consts/generalConsts';
import style from './SearchBook.module.scss'

type SearchBookType = {
    searchBook: string
    setSearchBook: (searchBook: string) => void
}

const SearchBook: FC<SearchBookType> = ({ searchBook, setSearchBook }) => {

    return (
        <div className={style.container}>
            <h3 className={style.leftText}>{searchBook ? `${searchingOn} '${searchBook}'` : allBooks}</h3>
            <div className={style.searchBookBlock}>
                <input maxLength={30} className={style.bookNameValue}
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