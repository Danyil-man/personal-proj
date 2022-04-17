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
    return (
        <div>
            Categories
        </div>
    )
}

export default Categories;