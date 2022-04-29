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
                {/* <Translate role="button" className={style.translateIcon} /> */}
            </div>
            {isAuth ? <div className={style.headerRightSide}>
                <Heart size={20} className={`mr-4 ${style.icon}`} />
                <Cart2 size={20} className={`mr-4 ${style.icon}`} />
                <p className={style.userInfo}></p> Увійшов, як {email}
                {email === 'demyanyuk76@gmail.com' ? <button className={style.navigateBtn} onClick={() => { navigate(ADMIN_ROUTE) }}>Адмін</button> : null}
                <button className={style.navigateBtn} onClick={LogOut}>Вийти</button>
            </div> : null}
        </header>
    )
}

export default Header