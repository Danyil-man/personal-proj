import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../../store/redux/reducers/booksReducer';
import { AppStateType } from '../../store/redux/store';
import { GenresType } from '../../types/generalTypes';
import style from './Categories.module.scss'

type Categories = {
    filterGenres: (filyerID: number) => void
}

const Categories: FC<Categories> = ({ filterGenres }) => {
    const genres = useSelector((state: AppStateType) => state.filter.genres)
    const { filterId, page, limit, filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)
    const dispatch = useDispatch()
    const getAll = () => {
        dispatch(getAllBooks(filterId, page, limit, filteredName, filteredPrice))
        console.log('all');

    }
    return (
        <div className={style.container}>
            <ul className={style.ulBlock}>
                <li onClick={getAll} className={style.liBlock}>Всі книги</li>
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