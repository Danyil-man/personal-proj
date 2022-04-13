import React from "react";
import style from "./Header.module.scss";
import { Heart, HeartArrow, HeartFill, HeartPulse, Translate } from "react-bootstrap-icons";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <h3>ReadBook</h3>
                <Translate size={30} role="button" />
            </div>
            <div className={style.headerRightSide}>
                <HeartPulse />
            </div>
        </header>
    )
}

export default Header