import React, { FC } from 'react';
import style from './BuyModal.module.scss'
type BuyBookModalFieldtype = {
    labelText: string
    type: string
    name: string
    setOnChange: (e: any) => void
}

const BuyBookModalField: FC<BuyBookModalFieldtype> = ({ labelText, type, name, setOnChange }) => {
    return (
        <div className={style.formItem}>
            <label className={style.formItemName}>{labelText}</label>
            <input className={style.formItemInput} type={type}
                name={name} onChange={setOnChange} required />
        </div>
    )
}

export default BuyBookModalField