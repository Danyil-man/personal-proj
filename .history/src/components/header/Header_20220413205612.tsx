import React from "react";
import style from "./Header.module.scss"

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <h2>ReadBook</h2>

            </div>
            <div className={style.headerRightSide}>

            </div>
        </header>
    )
}

export default Header