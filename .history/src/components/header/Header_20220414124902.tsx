import React from "react";
import style from "./Header.module.scss";
import { Cart2, Heart, HeartFill, Translate } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Header = () => {
    console.log('localhost:3000/user')


    return (
        <header className={style.header}>
            <div className={style.headerLeftSide}>
                <Link to='/'>
                    <h3>ReadBook</h3>
                </Link>
                <Translate size={30} role="button" />
                <img src="https://lh3.googleusercontent.com/QluyHyVDaWEflmIdC0sOX0VkXN_59qQRqZeLawRfRQ56Fre-bYDLchiSAg262NfQwg-yDPl5fPeW7dYMgkogEN551saAuy9BXgThlCGJDJU8D51SFCiXs4spbjeRj6l1Zz9qmhIRmzKXFsD_MRzACrhlZdJzon_8Ic0z0640eyTspWo5Mxe60Er6ZGB4UxWVZ5bM3r0AyI5In3Gd0d6wC-OwjHFb9OUB1LrDIlw-Wz2HDpe9oSVfw5naxXvhZmlopOMThYTw93k4gK0OnqOjvVpsuSI7w-7J4Vwkb-fXLVKDzY8R1CCN6mWAsap13wcEzX6auRnx7zIQQb4FUcI0G0gudhrhWYl10CwMo1LcYaTD6LmLq00sJS43R9SpQ-aadtj_lsmJp2Pk_iY5SoyqV0zwgA4lH6Jxbqo-gaxlM-sGztnffSnSs8B9o3sPgXXk2XY14bXqgKoxYgwR_z8_3gYL9TTBPcwOVZ6GZEpU0hRb3z8jWaYVErQOfWb05InU608x5OcXvqgb-jhX2GcHlYrSh0lgQFaapPGe_Qc2dR6ZMhcsiLMl25ZU2njspF0nP7vgeWMkQFUGKY9OkcvIn8O32bhYXMX9Xb0xNyHmkmN3icYuooo-bfP1_Wjnuc2lE0axEYE5AfQw_yIR2wuEPPtkOAGOwfvUDDplvfT-Fa_VS_uWxholZqs_0CC1a6JiF40XncHwfknCtFfKUTklPo64cbn9H1zUED3BUc02imuE3yF1pa1fhVBWN5rUJA=w155-h224-no?authuser=0" alt="photo" />
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