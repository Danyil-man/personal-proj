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
    //const { filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)

    const filterByAlpabet = () => {

        filterByBookName()
    }
    const filterByprice = () => {
        price === 'ASC' ? setPrice('') : setPrice('ASC')

    }

    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>Сортувати книги за:</h4>
                <button className={`
                         ${alphabet === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByAlpabet('ASC')}>Алфавітом</button>
                <button className={`
                         ${price === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filterByPrice('ASC')}>Меншою ціною</button>
                <button className={`
                         ${price === 'DESC' ? style.active : style.filterBtn}`} onClick={() => filterByPrice('DESC')}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter