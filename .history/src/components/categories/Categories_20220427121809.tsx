import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import { GenresType } from '../../types/generalTypes';
import style from './Categories.module.scss'

type Categories = {
    chooseGenre: (genreId: GenresType) => void
}

const Categories: FC<Categories> = ({ chooseGenre }) => {

    const genres = useSelector((state: AppStateType) => state.filter.genres)
    console.log(genres.map(genre => genre.name))
    return (
        <div className={style.container}>
            <ul className={style.ulBlock}>
                {genres.map((genre, index) => (
                    <li onClick={() => chooseGenre(genre)} className={style.liBlock} key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;