import React from "react";
import style from "./Header.module.scss";
import { Translate } from "react-bootstrap-icons";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <h3>ReadBook</h3>
                <Translate size={30} />
            </div>
            <div className={style.headerRightSide}>

            </div>
        </header>
    )
}

export default Header