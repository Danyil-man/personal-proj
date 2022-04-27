import React from 'react';
import style from './PageLoader.module.scss'


const PageLoader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src='https://res.cloudinary.com/wunu/image/upload/v1651065685/personalproject/Vanilla-1.3s-286px_1_ysbtfz.gif' alt="preloader" />
            </div>
        </div>
    )
}

export default PageLoader