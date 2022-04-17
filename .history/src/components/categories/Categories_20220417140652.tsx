import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../store/redux/reducers/filterReducer';
import { AppStateType } from '../../store/redux/store';
import style from './Categories.module.scss'


const Categories = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCategories())
    }, [])
    const categories = useSelector((state: AppStateType) => state.filter.categories)
    return (
        <div className={style.container}>
            <ul>
                {categories && categories.map(category => {
                    <li key={category}>
                        {category}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Categories;