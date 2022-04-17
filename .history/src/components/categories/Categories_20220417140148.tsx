import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../store/redux/reducers/filterReducer';
import { AppStateType } from '../../store/redux/store';


const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state: AppStateType) => state.filter.categories)
    useEffect(() => {
        dispatch(getAllCategories())
    }, [])
    console.log(categories.map(category => category))
    return (
        <div>
            <ul>
                {categories && categories.map(category => {
                    <li>
                        {category}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Categories;