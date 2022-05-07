import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../../routings/pathVariables';
import style from './EmptyBlock.module.scss'

type EmptyBlockType = {
    title: string
    subTitle: string
    image: string
}

const EmptyBlock: FC<EmptyBlockType> = ({ title, subTitle, image }) => {
    const navigate = useNavigate()
    return (
        <div className={style.emptyCartBlock}>
            <img className={style.image} src={image} alt="empty-cart" />
            <h4 className={style.title}>{title}</h4>
            <h6 className={style.subTitle}>{subTitle}</h6>
            <button className={style.homeBtn} onClick={() => navigate(HOME_ROUTE)}>На головну</button>
        </div>
    )
}

export default EmptyBlock