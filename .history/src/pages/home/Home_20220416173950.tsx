import React from 'react';
import Categories from '../../components/categories/Categories';

import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src='https://img.freepik.com/free-vector/banner-with-childrens-books-boys-girls-are-standing-near-books-books-childrens-kids_503396-107.jpg?w=900' alt="" />
                <Categories />
            </div>
        </div>
    )
}

export default Home