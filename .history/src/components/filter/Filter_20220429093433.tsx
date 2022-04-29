import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
    filterByPrice: (price: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName, filterByPrice }) => {
    const [alphabit, setAlphabit] = useState('ASC')
    const [priceASC, setPriceASC] = useState('ASC')
    const [priceDESC, setPriceDESC] = useState('DESC')
    const { filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)
    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>Фільтрувати книги за:</h4>
                <button className={`
                         ${filteredName === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByBookName('ASC')}>Алфавітом</button>
                <button className={`
                         ${filteredName === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByPrice('ASC')}>Меншою ціною</button>
                <button className={`
                         ${filteredName === 'DESC' ? style.active : style.filterBtn}`} onClick={() => filterByPrice('DESC')}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter