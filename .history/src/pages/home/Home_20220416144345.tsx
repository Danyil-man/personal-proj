import React from 'react';
import Categories from '../../components/categories/Categories';

import style from './Home.module.scss'

const Home = () => {
    return (

        <div className={style.container}>
            <img src='https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg' alt="" />
            <Categories />
        </div>

    )
}

export default Home