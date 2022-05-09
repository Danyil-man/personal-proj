import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss'

type NavItemType = {
    path: string
    Element: any
}

const NavItem: FC<NavItemType> = ({ path, Element }) => {
    return (
        <Link to={path} className={style.link}>
            <Element className={style.icon} />
        </Link>
    )
}
export default NavItem