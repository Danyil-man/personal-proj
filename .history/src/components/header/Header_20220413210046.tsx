import React from "react";
import style from "./Header.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <p className="h2">ReadBook</p>

            </div>
            <div className={style.headerRightSide}>

            </div>
        </header>
    )
}

export default Header