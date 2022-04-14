import React from "react";
import style from "./Header.module.scss";
import { Cart2, Heart, HeartFill, Translate } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <Link to='/'>
                    <h3>ReadBook</h3>
                </Link>
                <Translate size={30} role="button" />
                <img src="https://photos.google.com/photo/AF1QipPjSJ06BY6IeRPJv0eFjUHBeE-kAFAr64tIqRaB" />
            </div>
            <div className={style.headerRightSide}>
                <Heart size={20} className={`mr-4 fa-2x ${style.icon}`} />
                <Cart2 size={20} className={`mr-4 ${style.icon}`} />
                Signed in, as Danyil
            </div>
        </header>
    )
}

export default Header