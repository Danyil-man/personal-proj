import React, { useState } from 'react';
import CreateItem from '../../modals/CreateItem/CreateItem';
import style from './Admin.module.scss'
const Admin = () => {
    const [createItem, setCreateItem] = useState(false)
    return (
        <div className={style.container}>
            <button className={style.createBtn} onClick={() => setCreateItem(!createItem)}>Додати Книгу</button>
            <CreateItem show={createItem} onHide={() => setCreateItem(!createItem)} />
        </div>
    )
}

export default Admin