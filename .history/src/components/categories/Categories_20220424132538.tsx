import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './Categories.module.scss'


const Categories = () => {

    const genres = useSelector((state: AppStateType) => state.filter.genres)

    return (
        <div className={style.container}>
            <ul className={style.ulBlock}>
                {genres.map((genre, index) => (
                    <li className={style.liBlock} key={genre.id}>{genre}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;