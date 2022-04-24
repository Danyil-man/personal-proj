import React, { FC } from 'react';
import style from './OpenedBookModal.module.scss'

type OpenBookModalType = {
    close: boolean
    onClose: (close: boolean) => void
}

const OpenedBookModal: FC<OpenBookModalType> = ({ close, onClose }) => {
    return (
        <div className={style.wraper}>
            <div className={style.container}>
                close <button onClick={() => onClose(!close)}>X</button>
                Modal
            </div>
        </div>
    )
}

export default OpenedBookModal