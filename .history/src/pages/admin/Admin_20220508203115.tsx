import React, { useState } from 'react';
import CreateItem from '../../modals/CreateItem/CreateItem';
import style from './Admin.module.scss'
const Admin = () => {
    const [createItem, setCreateItem] = useState(false)
    return (
        <div className={style.container}>
            <div className={style.itemBlock}>
                <button className={style.createBtn} onClick={() => setCreateItem(!createItem)}></button>
                <CreateItem show={createItem} onHide={() => setCreateItem(!createItem)} />
            </div>
        </div>
    )
}

export default Admin