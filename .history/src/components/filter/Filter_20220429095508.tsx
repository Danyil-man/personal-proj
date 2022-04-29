import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
    filterByPrice: (price: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName, filterByPrice }) => {
    const [alphabit, setAlphabit] = useState('')
    const [priceASC, setPriceASC] = useState('')
    const [priceDESC, setPriceDESC] = useState('')
    // const { filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)

    const filterByName = (filterName: string) => {
        setAlphabit(filterName)
        filterByBookName(filterName)
        setPriceASC('')
        setPriceDESC('')
    }
    const filterByHeighPrice = (filterHighPrice: string) => {
        setPriceASC(filterHighPrice)
        filterByPrice(filterHighPrice)
        setAlphabit('')
        setPriceDESC('')
    }
    const filterByLowPrice = (filterLowPrice: string) => {
        setPriceDESC(filterLowPrice)
        filterByPrice(filterLowPrice)
        setAlphabit('')
        setPriceASC('')
    }

    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>Фільтрувати книги за:</h4>
                <button className={`
                         ${alphabit === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByName('ASC')}>Алфавітом</button>
                <button className={`
                         ${priceASC === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByHeighPrice('ASC')}>Меншою ціною</button>
                <button className={`
                         ${priceDESC === 'DESC' ? style.active : style.filterBtn}`} onClick={() => filterByLowPrice('DESC')}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter