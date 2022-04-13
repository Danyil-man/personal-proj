import React from "react";
import style from "./Header.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <h4>ReadBook</h4>

            </div>
            <div className={style.headerRightSide}>

            </div>
        </header>
    )
}

export default Header