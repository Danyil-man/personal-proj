import React, { FC } from 'react';
import style from './CreateItem.module.scss'



type CreateItemFieldType = {
    labelText: string
    type: string
    setOnChange: (e: any) => void
}

const CreateItemField: FC<CreateItemFieldType> = ({ labelText, type, setOnChange }) => {
    return (
        <div className={style.formItem}>
            <label className={style.formItemName}>{labelText}</label>
            <input className={style.formItemInput} type={type} onChange={setOnChange} required />
        </div>
    )
}

export default CreateItemField