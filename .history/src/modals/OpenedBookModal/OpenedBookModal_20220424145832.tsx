import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import style from './OpenedBookModal.module.scss'

type OpenBookModalType = {
    close: boolean
    onClose: (close: boolean) => void
}

const OpenedBookModal: FC<OpenBookModalType> = ({ close, onClose }) => {
    return (
        <div>
            fsafas
        </div>
    )
}

export default OpenedBookModal