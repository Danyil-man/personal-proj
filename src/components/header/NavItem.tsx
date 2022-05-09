import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss'

type NavItemType = {
    path: string
}

const NavItem: FC<NavItemType> = ({ path, children }) => {
    return (
        <Link to={path} className={style.link}>
            {children}
        </Link>
    )
}
export default NavItem