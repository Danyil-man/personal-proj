import React, { FC, useState } from 'react';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
    filterByPrice: (price: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName, filterByPrice }) => {
    const [alphabit, setAlphabit] = useState('ASC')
    const [priceASC, setPriceASC] = useState('ASC')
    const [priceDESC, setPriceDESC] = useState('DESC')
    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>Фільтрувати книги за:</h4>
                <button className={style.filterBtn} onClick={() => filterByBookName(alphabit)}>Алфавітом</button>
                <button className={style.filterBtn} onClick={() => filterByPrice(priceASC)}>Меншою ціною</button>
                <button className={style.filterBtn} onClick={() => filterByPrice(priceDESC)}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter