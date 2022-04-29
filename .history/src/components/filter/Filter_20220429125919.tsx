import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
    filterByPrice: (price: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName, filterByPrice }) => {
    const [alphabet, setAlphabet] = useState('')
    const [price, setPrice] = useState('')
    const { filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)

    const filterByAlpabetASC = () => {
        alphabet === 'ASC' ? setAlphabet('') : setAlphabet('ASC')
        filterByBookName(alphabet)
        console.log(alphabet)
    }
    const filterPrice = (filter: string) => {
        price === filter ? setPrice('') : setPrice(filter)
        filterByPrice(price)
    }
    console.log(alphabet)
    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>Сортувати книги за:</h4>
                <button className={`
                         ${filteredName === 'ASC' ? style.active : style.filterBtn}`} onClick={filterByAlpabetASC}>Алфавітом</button>
                <button className={`
                         ${filteredPrice === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterPrice('ASC')}>Меншою ціною</button>
                <button className={`
                         ${filteredPrice === 'DESC' ? style.active : style.filterBtn}`} onClick={() => filterPrice('DESC')}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter