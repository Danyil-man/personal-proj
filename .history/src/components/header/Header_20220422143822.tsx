import React from 'react';
import style from './Header.module.scss';
import { Cart2, Heart, Translate } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import { Button } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../routings/pathVariables';


const Header = () => {

    const { isAuth, email } = useSelector((state: AppStateType) => state.user)
    const navigate = useNavigate()
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
                Увійшов, як {email}
                <Button variant='dark' onClick={() => { navigate(ADMIN_ROUTE) }}>Адмін</Button>
                <Button variant='dark' onClick={() => { navigate(LOGIN_ROUTE) }}>Вийти</Button>
            </div> : <div className={style.headerRightSide}>
                <Button variant='dark'>Увійти</Button>
            </div>}

        </header>
    )
}

export default Header