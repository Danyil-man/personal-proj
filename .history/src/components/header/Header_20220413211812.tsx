import React from "react";
import style from "./Header.module.scss";
import { Cart, Cart2, Cart4, Heart, HeartArrow, HeartFill, Translate } from "react-bootstrap-icons";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <h3>ReadBook</h3>
                <Translate size={30} role="button" />
            </div>
            <div className={style.headerRightSide}>
                <Heart size={20} />
                <Cart4 size={20} />
            </div>
        </header>
    )
}

export default Header