import React from "react";
import style from "./Header.module.scss";
import { Cart2, Heart, HeartFill, Translate } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from 'axios'

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <Link to='/'>
                    <h3>ReadBook</h3>
                </Link>
                <Translate size={30} role="button" />
                <img width={260} src="https://lh3.googleusercontent.com/G0m0jcQMa55WKzFxBb7Fl1f5jR6TJBTw0iAjIDhmkBly2pASh3hVzwNXfsUyznthONKnZe0l7Yz5PVNZNiwG4ETqiyhsj2CgGvYLtHVBrSkYIIWKcnG8qAipu8maS1OiJ9D1dtNXfajdPElwh9Yx8BejEWW5GlaqVv6Dl9yr3jIj-zJUYVoztKnQ7LQbpbgL4y2fxwmks2MPc304JZc96zzz7ejwpAol526DsYPxU6A0S17IJxZSiqGpCj7sN4Ccs5AbfyKSQxdtT_KKfGHLWPLNtCeZLYxupTWKXR0OhbWsvG0TZS31VRjYgCfrESGv0M7a6GyjZWvxGFJecJijVet3Ad4VXDRn9mBG2xNzBADSnIUAPKvvW_gN5aMfUDRxLjxmP1D8Qb4ESdghYfwtJfGt080EbnplxLXnzPOeS7RzBUk_MSckxmG2AA3XnuDPK4u6F1NEVjyWfkSaEpJjz0xcD-Z4eIxKOU20gLjJFC3i1nADh6zDWGwoiSK-s71ec_0fw_Owv67eK9e2JoftVeiwNQiLHy1jdsc683KQSsAIBPGAGA4d37t4h1sgcWX8hHuCTTjhGvjqwF_x2x57kbEJBiyRHCK1oJ_U2bpXQCzOWKeOSqT7vp7_ms4IPRnQ_bGzT6q_iDftWmwVykaQlUoXM8sAopbygIjsNBC9mNuemNoyaSB1JuGcDGxvz-R39-YZ5JQa5lgjoLXsZPLCGZuBnFCouLubsFYScd8BbsE5VbLhRq3o0sLsURfzhQ=w484-h630-no?authuser=0" alt="photo" />
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