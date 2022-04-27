import React, { useState } from 'react';
import { DashCircleDotted, Search } from 'react-bootstrap-icons';
import style from './SearchBook.module.scss'

const SearchBook = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className={style.container}>
            <h1>{searchValue ? `Search on: '${searchValue}'` : 'Усі Книги'}</h1>
            <div className={style.searchBookBlock}>
                <Search />

                <input className={style.bookNameValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    value={searchValue}
                    placeholder="Search..."
                />
                {searchValue ? (
                    <DashCircleDotted
                        onClick={() => setSearchValue('')}
                        className={style.clearSearchBtn}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default SearchBook;