import React from 'react';
import style from './Profile.module.scss'

const Profile = () => {
    return (
        <div className={style.container}>
            <h4 className={style.headText}>Мої замовлення</h4>
            <div className={style.favoriteBlock}>

            </div>
        </div>
    )
}

export default Profile