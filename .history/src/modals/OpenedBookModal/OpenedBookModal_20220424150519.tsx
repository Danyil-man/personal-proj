import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import style from './OpenedBookModal.module.scss'

type OpenBookModalType = {
    close: boolean
    onClose: (close: boolean) => void
}

const OpenedBookModal: FC<OpenBookModalType> = ({ close, onClose }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>

            </div>
        </div>

    )
}

export default OpenedBookModal