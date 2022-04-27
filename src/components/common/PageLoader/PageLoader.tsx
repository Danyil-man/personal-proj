import React from 'react';
import style from './PageLoader.module.scss'


const PageLoader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src='https://res.cloudinary.com/wunu/image/upload/v1651065827/personalproject/Vanilla-1s-286px_2_qbhczp.gif' alt="preloader" />
            </div>
        </div>
    )
}

export default PageLoader