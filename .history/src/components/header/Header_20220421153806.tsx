import React from 'react';
import style from './Header.module.scss';
import { Cart2, Heart, Translate } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import { Button } from 'react-bootstrap';


const Header = () => {
    const user = useSelector((state: AppStateType) => state.user.user)
    const isAuth = useSelector((state: AppStateType) => state.user.isAuth)
    return (

        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <Link to='/'>
                    <h3>ReadBook</h3>
                </Link>
                <Translate size={30} role="button" />
            </div>
            {isAuth ? <div className={style.headerRightSide}>
                <Heart size={20} className={`mr-4 ${style.icon}`} />
                <Cart2 size={20} className={`mr-4 ${style.icon}`} />
                Увійшов, як (name)
            </div> : <div className={style.headerRightSide}>
                <Button variant='dark'>Увійти</Button>
            </div>}

        </header>
    )
}

export default Header