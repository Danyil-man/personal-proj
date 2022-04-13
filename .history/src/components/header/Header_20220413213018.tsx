import React from "react";
import style from "./Header.module.scss";
import { Cart2, Heart, Translate } from "react-bootstrap-icons";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <h3>ReadBook</h3>
                <Translate size={30} role="button" />
            </div>
            <div className={style.headerRightSide}>
                <Heart size={20} className={`mr-4 ${style.icon}`} />
                <Cart2 size={20} className={`mr-4 ${style.icon}`} />
                Signed in, as Danyil
            </div>
        </header>
    )
}

export default Header