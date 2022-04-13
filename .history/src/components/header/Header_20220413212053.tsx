import React from "react";
import style from "./Header.module.scss";
import { Cart, Cart2, Cart3, Cart4, CartFill, CartPlus, Heart, HeartArrow, HeartFill, Translate } from "react-bootstrap-icons";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <h3>ReadBook</h3>
                <Translate size={30} role="button" />
            </div>
            <div className={style.headerRightSide}>
                <Heart size={20} className="mr-2" />
                <Cart2 size={20} />
            </div>
        </header>
    )
}

export default Header