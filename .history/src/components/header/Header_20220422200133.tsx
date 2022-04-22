import React from 'react';
import style from './Header.module.scss';
import { Cart2, Heart, Translate } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import { Button } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../../routings/pathVariables';
import { logOut } from '../../store/redux/reducers/userReducer';


const Header = () => {

    const { isAuth, email } = useSelector((state: AppStateType) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const LogOut = () => {
        dispatch(logOut())
    }
    return (

        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <Link to='/'>
                    <h3 className={style.logoName}>ReadBook</h3>
                </Link>
                <Translate size={30} role="button" />
            </div>
            {isAuth ? <div className={style.headerRightSide}>
                <Heart size={20} className={`mr-4 ${style.icon}`} />
                <Cart2 size={20} className={`mr-4 ${style.icon}`} />
                Увійшов, як {email}
                <Button variant='dark' onClick={() => { navigate(ADMIN_ROUTE) }}>Адмін</Button>
                <Button variant='dark' onClick={LogOut}>Вийти</Button>
            </div> : null}
        </header>
    )
}

export default Header