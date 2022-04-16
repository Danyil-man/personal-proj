import React from 'react';

import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src='https://res.cloudinary.com/wunu/image/upload/v1650108248/personalproject/emblem-icon-banner-badge-graphic_uvw0ha.jpg' alt="" />
            </div>
        </div>
    )
}

export default Home