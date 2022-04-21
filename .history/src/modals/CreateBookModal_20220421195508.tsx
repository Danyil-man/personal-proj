import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

type CreateBookModalType = {
    show: boolean
    onHide: () => void
}

const CreateBookModal: FC<CreateBookModalType> = ({ show, onHide }) => {
    return (
        <>
            <Modal
                size="lg"
                centered
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Додати нову книгу
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={{
                        genre: ''
                    }} onSubmit={() => console.log('Genre name is')}>
                        <Form>
                            <label>Назва книги</label>
                            <Field placeholder='назва книги' />
                            <label>ціна</label>
                            <Field placeholder='назва жанру' />
                            <label>фото</label>
                            <Field type='file' />
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Закрити</Button>
                    <Button onClick={onHide}>Добавити</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateBookModal