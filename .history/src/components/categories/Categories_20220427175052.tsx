import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import { GenresType } from '../../types/generalTypes';
import style from './Categories.module.scss'

type Categories = {
    filterGenres: (filyerID: number) => void
}



const Categories: FC<Categories> = ({ filterGenres }) => {
    const genres = useSelector((state: AppStateType) => state.filter.genres)
    const { filterId } = useSelector((state: AppStateType) => state.books)
    console.log('Genres', genres.map(genre => genre.id))
    console.log('Filter', filterId)
    return (
        <div className={style.container}>
            <ul className={style.ulBlock}>
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