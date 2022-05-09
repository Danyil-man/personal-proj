import React, { useState } from 'react';
import { addBook } from '../../consts/adminPage';
import CreateItem from '../../modals/CreateItem/CreateItem';
import style from './Admin.module.scss'
const Admin = () => {
    const [createItem, setCreateItem] = useState(false)
    return (
        <div className={style.container}>
            <div className={style.itemBlock}>
                <button className={style.createBtn} onClick={() => setCreateItem(!createItem)}>{addBook}</button>
                <CreateItem show={createItem} onHide={() => setCreateItem(!createItem)} />
            </div>
        </div>
    )
}

export default Admin