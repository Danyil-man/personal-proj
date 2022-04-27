import React from 'react';
import style from './PageLoader.module.scss'


const PageLoader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <img src='https://res.cloudinary.com/wunu/image/upload/v1651065209/personalproject/loading2_2_pse4rc.gif' alt="preloader" />
            </div>
        </div>
    )
}

export default PageLoader