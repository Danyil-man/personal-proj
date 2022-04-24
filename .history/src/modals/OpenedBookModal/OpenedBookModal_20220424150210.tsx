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
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => onClose(!close)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default OpenedBookModal