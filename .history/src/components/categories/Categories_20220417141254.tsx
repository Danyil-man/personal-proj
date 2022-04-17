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
    const categori = [
        'Фантастика', 'Історія', 'Наукова', 'Роман', 'Детектив', 'Бізнес'
    ]
    console.log(categori)
    return (
        <div className={style.container}>
            {categori.map((category, index) => {
                <p key={category}>
                    asdad
                </p>
            })}

        </div>
    )
}

export default Categories;