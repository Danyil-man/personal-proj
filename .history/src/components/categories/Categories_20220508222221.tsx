import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allBooks } from '../../consts/generalConsts';
import { getAllBooks } from '../../store/redux/reducers/booksReducer';
import { AppStateType } from '../../store/redux/store';
import { GenresType } from '../../types/generalTypes';
import style from './Categories.module.scss'

type Categories = {
    filterGenres: (filterID: number) => void
}

const Categories: FC<Categories> = ({ filterGenres }) => {
    const genres = useSelector((state: AppStateType) => state.filter.genres)
    const { filterId, page, limit, filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)
    const dispatch = useDispatch()
    const getAll = (filterAll = '' || 0, nameAll = '', priceAll = '') => {
        dispatch(filterGenres(0))
        dispatch(getAllBooks(filterAll, page, limit, nameAll, priceAll))
    }
    return (
        <div className={style.container}>
            <ul className={style.ulBlock}>
                <li onClick={() => getAll(filterId, filteredName, filteredPrice)}
                    className={filterId === 0 || '' ? style.active : style.liBlock}>{allBooks}</li>
                {genres.map((genre) => (
                    <li onClick={() => filterGenres(genre.id)}
                        className={`
                         ${filterId === genre.id ? style.active : style.liBlock}`} key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;