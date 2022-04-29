import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
    filterByPrice: (price: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName, filterByPrice }) => {
    const { filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)

    const filterByAlpabetASC = () => {
        filteredName === 'ASC' ? filterByBookName('') : filterByBookName('ASC')
    }
    const filterPriceASC = () => {
        filteredPrice === 'ASC' ? filterByPrice('') : filterByPrice('ASC')
        filterByBookName('')
    }
    const filterPriceDESC = () => {
        filteredPrice === 'DESC' ? filterByPrice('') : filterByPrice('DESC')
        filterByBookName('')
    }
    const filter = (filterField: string, filterParam: string, setFilter: (name: string) => void, removeFilter: (name: string) => void) => {
        filterField === filterParam ? setFilter('') : setFilter(filterParam);
        removeFilter('')
    }

    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>Сортувати книги за:</h4>
                <button className={`
                         ${filteredName === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filter(filteredName, 'ASC', filterByBookName, filterByPrice)}>Алфавітом</button>
                <button className={`
                         ${filteredPrice === 'ASC' ? style.active : style.filterBtn}`} onClick={filterPriceASC}>Меншою ціною</button>
                <button className={`
                         ${filteredPrice === 'DESC' ? style.active : style.filterBtn}`} onClick={filterPriceDESC}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter