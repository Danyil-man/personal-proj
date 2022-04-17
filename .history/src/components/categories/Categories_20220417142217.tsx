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
                {categories.map((category, index) => (
                    <li key={category}>{category && categories.length > 3 ? <br></br> : null}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;