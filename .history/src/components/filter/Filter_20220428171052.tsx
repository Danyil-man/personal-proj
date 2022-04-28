import React, { FC, useState } from 'react';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
    filterByPrice: (price: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName, filterByPrice }) => {
    const [alphabit, setAlphabit] = useState('DESC')
    const [priceASC, setPriceASC] = useState('ASC')
    const [priceDESC, setPriceDESC] = useState('DESC')
    return (
        <div className={style.container}>
            <h4>Фільтр книг</h4>
            <button onClick={() => filterByBookName(alphabit)}>фільтир за алфавітом</button>
            <button onClick={() => filterByPrice(priceASC)}>фільтир за меншою ціною</button>
            <button onClick={() => filterByPrice(priceDESC)}>фільтир за більшою ціною</button>
        </div>
    )
}

export default Filter