import React from "react";
import style from "./Header.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <h1>ReadBook</h1>

            </div>
            <div className={style.headerRightSide}>

            </div>
        </header>
    )
}

export default Header