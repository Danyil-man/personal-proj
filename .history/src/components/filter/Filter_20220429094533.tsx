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

    const filterByName = () => {
        setAlphabit('ASC')
        filterByBookName(alphabit)
        setPriceASC('')
        setPriceDESC('')
    }

    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>Фільтрувати книги за:</h4>
                <button className={`
                         ${alphabit === 'ASC' ? style.active : style.filterBtn}`} onClick={filterByName}>Алфавітом</button>
                <button className={`
                         ${priceASC === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByPrice('ASC')}>Меншою ціною</button>
                <button className={`
                         ${priceDESC === 'DESC' ? style.active : style.filterBtn}`} onClick={() => filterByPrice('DESC')}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter