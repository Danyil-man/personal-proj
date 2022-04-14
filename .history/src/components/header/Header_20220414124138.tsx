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
                <img src="https://lh3.googleusercontent.com/O8zaliwWjTADmFHR8ttbMQmAhuNGiyc2O9eq3of-OTWaLvSnuB-phrZ_KqqD-vE1ClcF-zMSxu_NKTIoncICwpHH1V8cDPFsptWThjdrUwNGmtQf_izoaLgaILq0VLB66pxowSaTkyruiOuB81Mn-Gye-TjNgCYGgb92--yJ1jgtt9RZwWElr7kRwU44JMlKdyLoEHyWIjwwor93MNyXcBiqAlGR1iRJPeIXscA5Zf-HdAURhfIUmB7YlksX8wfVgl4B-kOCZzqm7UVWd6U7SXEVrNClvb_6qhxwel3ERt1AHhI68P0Kuz6oMtVVH14OGhjVXSNqIu3XPZO5IqGRyLiDmj5UaASUMUqZOdoBgo44W8ka2DmA0vYbw3IYlpqCNh7Kp9be5jVaHjHw9GOEaDMDJEj0jsrUHEZEstsEm8xahwdqSP_Nt24x8nocaOzmT10TyC3tyeoMUdIt3BIk8oAkQ0vXi1AMarS91WuDP2Yc59qA6fqhQyAK0UQCLzzI6FamkclsIB9koLtGmvvqk0xDdiOdcW71uqApIlVXLJEuIpQxFxom0chNj6S6oflE_Sx5GOYxlbEI5RdqSccnJebOmiPap13VXhNjZn87hcEfRpoZ-v7mPtYbLeOUugG17XoaVFYL5fUbf81FSdKIsbc_yeX6Vc2uPoaQMX2KNkHvNDmSwu5dEtZ88TQ5FkNX5FxJMbyJDSiPDwMPh7nSOmXK9kU1XkiR31dt4nEYkyIzVfk9hBqrDqGdt2qzKQ=w155-h224-no?authuser=0" alt="photo" />
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