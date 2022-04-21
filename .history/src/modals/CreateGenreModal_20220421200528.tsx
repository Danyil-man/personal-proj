import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';

type CreateGenreModalType = {
    show: boolean
    onHide: () => void
}

const CreateGenreModal: FC<CreateGenreModalType> = ({ show, onHide }) => {

    return (
        <>
            <Modal
                size="lg"
                centered
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Додати новий Жанр
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={{
                        genre: ''
                    }} onSubmit={() => console.log('Genre name is')}>
                        <Form>
                            <label>Назва жанру</label>
                            <Field placeholder='назва жанру' name="genre" />
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
export default CreateGenreModal
