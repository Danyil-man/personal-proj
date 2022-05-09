import React, { FC } from 'react';

type CreateItemFieldType = {

}

const CreateItemField: FC<CreateItemFieldType> = () => {
    return (
        <div className={style.formItem}>
            <label className={style.formItemName}>{bookName}</label>
            <input className={style.formItemInput} type='text' onChange={(e: any) => setName(e.target.value)} required />
        </div>
    )
}

export default CreateItemField