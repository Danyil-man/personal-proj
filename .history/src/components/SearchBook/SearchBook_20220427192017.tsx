import React, { useState } from 'react';
import { DashCircleDotted, Search } from 'react-bootstrap-icons';
import style from './SearchBook.module.scss'

const SearchBook = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className={style.headCard}>
            <h1>{searchValue ? `Search on: '${searchValue}'` : 'Усі Книги'}</h1>
            <div className={style.searchBlock}>
                <Search />

                <input
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