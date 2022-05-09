import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { asc, desc, sortBooksBy, sortByAlphabet, sortByHigherPrice, sortByLowPrice } from '../../consts/filter';
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
                         ${filteredName === asc ? style.active : style.filterBtn}`} onClick={() => filter(filteredName, 'ASC', filterByBookName, filterByPrice)}>{sortByAlphabet}</button>
                <button className={`
                         ${filteredPrice === asc ? style.active : style.filterBtn}`} onClick={() => filter(filteredPrice, 'ASC', filterByPrice, filterByBookName)}>{sortByLowPrice}</button>
                <button className={`
                         ${filteredPrice === desc ? style.active : style.filterBtn}`} onClick={() => filter(filteredPrice, 'DESC', filterByPrice, filterByBookName)}>{sortByHigherPrice}</button>
            </div>
        </div>
    )
}

export default Filter