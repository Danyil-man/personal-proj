import React from 'react';
import baner from '../../images/baner.jpg';

import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src={baner} alt="" />
            </div>
        </div>
    )
}

export default Home