import React, { FC, useState } from 'react';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName }) => {
    const [asc, setASC] = useState('ASC')
    const [desc, setDESC] = useState('DESC')
    return (
        <div className={style.container}>
            <h4>Фільтр книг</h4>
            <button onClick={() => filterByBookName(asc)}>фільтир за алфавітом</button>
        </div>
    )
}

export default Filter