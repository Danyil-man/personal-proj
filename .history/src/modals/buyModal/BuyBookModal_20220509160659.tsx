import React, { FC } from "react";

type BuyBookModalFieldtype = {

}

const BuyBookModalField: FC<BuyBookModalFieldtype> = () => {
    return (
        <div className={style.formItem}>
            <label className={style.formItemName}>{name}</label>
            <input className={style.formItemInput} type="text"
                name="name" onChange={(e: any) => handleChange(e)} required />
        </div>
    )
}

export const BuyBookModalField