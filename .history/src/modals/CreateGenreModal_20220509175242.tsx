import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createGenre } from '../store/redux/reducers/genreReducer';

type CreateGenreModalType = {
    show: boolean
    onHide: () => void
}



const CreateGenreModal: FC<CreateGenreModalType> = ({ show, onHide }) => {

    const dispatch = useDispatch()
    const addGenre = (values: any) => {
        dispatch(createGenre({ name: values.genre }))
    }
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
                    }} onSubmit={addGenre}>
                        <Form>
                            <label>Назва жанру</label>
                            <Field placeholder='назва жанру' name="genre" />
                            <button type='submit'>Добавити</button>
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Закрити</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CreateGenreModal;
