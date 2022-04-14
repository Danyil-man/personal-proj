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
                <img width={500} src="https://www.bookland.com/img/pictures/1/777/7777750/w155.f7fee9bf0be3723e8aae0db64a1332ecfc8b341b83f6015b.jpg" alt="photo" />
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