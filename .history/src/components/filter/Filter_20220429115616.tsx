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
    const { filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)

    // const filterByName = (filterName: string) => {
    //     setPriceASC('')
    //     setPriceDESC('')
    //     setAlphabit(filterName)
    //     filterByBookName(alphabit)
    //     filterByPrice(priceDESC)
    //     filterByPrice(priceASC)
    // }
    // const filterByHeighPrice = (filterHighPrice: string) => {
    //     setPriceASC(filterHighPrice)
    //     filterByPrice(priceASC)
    //     setAlphabit('')
    //     setPriceDESC('')
    //     filterByBookName(alphabit)
    // }
    // const filterByLowPrice = (filterLowPrice: string) => {
    //     setPriceDESC(filterLowPrice)
    //     filterByPrice(priceDESC)
    //     setAlphabit('')
    //     setPriceASC('')
    //     filterByBookName(alphabit)
    // }

    // const filterByName = (filter: string) => {
    //     if (filter === 'ASC') {
    //         filterByBookName('')
    //     } else {
    //         filterByBookName(filter)
    //     }

    // }

    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>Сортувати книги за:</h4>
                <button className={`
                         ${filteredName === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByName('ASC')}>Алфавітом</button>
                <button className={`
                         ${filteredPrice === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByPrice('ASC')}>Меншою ціною</button>
                <button className={`
                         ${filteredPrice === 'DESC' ? style.active : style.filterBtn}`} onClick={() => filterByPrice('DESC')}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter