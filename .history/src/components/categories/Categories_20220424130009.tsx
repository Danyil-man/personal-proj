import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import style from './Categories.module.scss'


const Categories = () => {

    const categories = useSelector((state: AppStateType) => state.filter.categories)
    return (
        <div className={style.container}>
            <ul className={style.ulBlock}>
                {categories.map((category, index) => (
                    <li className={style.liBlock} key={category}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;