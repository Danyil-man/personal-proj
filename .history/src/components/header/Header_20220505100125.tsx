import React from 'react';
import style from './Header.module.scss';
import { Cart2, Heart, Person, PersonFill } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';
import { ADMIN_ROUTE } from '../../routings/pathVariables';
import { logOut } from '../../store/redux/reducers/userReducer';
import { btnLogOut, signedAs, storeName } from '../../consts/header';


const Header = () => {

    const { isAuth, user } = useSelector((state: AppStateType) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const LogOut = () => {
        dispatch(logOut())
    }
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <Link to='/' className={style.link}>
                    <h3 className={style.logoName}>{storeName}</h3>
                </Link>
                {/* <Translate role="button" className={style.translateIcon} /> */}
            </div>
            {isAuth ? <div className={style.headerRightSide}>
                <Link to='/favorite' className={style.link}>
                    <Heart size={20} className={`mr-4 ${style.icon}`} />
                </Link>
                <Link to='/cart' className={style.link}>
                    <Cart2 size={20} className={`mr-4 ${style.icon}`} />
                </Link>
                <Link to='/profile' className={style.link}>
                    <Person size={20} className={`mr-4 ${style.icon}`} />
                </Link>
                <p className={style.userInfo}> {signedAs} {user.email}</p>
                {user.role === 'ADMIN' ? <button className={style.navigateBtn} onClick={() => { navigate(ADMIN_ROUTE) }}>{Адмін}</button> : null}
                <button className={style.navigateBtn} onClick={LogOut}>{btnLogOut}</button>
            </div> : null}
        </header>
    )
}

export default Header