import React, { FC } from 'react';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName }) => {
    return (
        <div className={style.container}>

        </div>
    )
}

export default Filter