import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { sortBooksBy } from '../../consts/filter';
import { AppStateType } from '../../store/redux/store';
import style from './Filter.module.scss';

type FiltersType = {
    filterByBookName: (name: string) => void
    filterByPrice: (price: string) => void
}

const Filter: FC<FiltersType> = ({ filterByBookName, filterByPrice }) => {
    const { filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)
    const filter = (filterField: string, filterParam: string, setFilter: (name: string) => void, removeFilter: (name: string) => void) => {
        filterField === filterParam ? setFilter('') : setFilter(filterParam);
        removeFilter('')
    }

    return (
        <div className={style.container}>
            <div className={style.containerInner}>
                <h4 className={style.headText}>{sortBooksBy}</h4>
                <button className={`
                         ${filteredName === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filter(filteredName, 'ASC', filterByBookName, filterByPrice)}>Алфавітом</button>
                <button className={`
                         ${filteredPrice === 'ASC' ? style.active : style.filterBtn}`} onClick={() => filter(filteredPrice, 'ASC', filterByPrice, filterByBookName)}>Меншою ціною</button>
                <button className={`
                         ${filteredPrice === 'DESC' ? style.active : style.filterBtn}`} onClick={() => filter(filteredPrice, 'DESC', filterByPrice, filterByBookName)}>Більшою ціною</button>
            </div>
        </div>
    )
}

export default Filter