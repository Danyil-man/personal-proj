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
                        name: '',
                        author: '',
                        description: '',
                        price: 0,
                        image: '',
                        genreId: 0
                    }} onSubmit={() => console.log('Genre name is')}>
                        <Form>
                            <label>Назва книги</label>
                            <Field type="text" name="name" placeholder='назва книги' />
                            <label>Автор</label>
                            <Field type="number" name="author" placeholder='Автор' />
                            <label>Опис</label>
                            <Field type="number" name="description" placeholder='Опис книги' />
                            <label>Ціна</label>
                            <Field type="number" name="price" placeholder='Вартість книги' />
                            <label>Фото</label>
                            <input type='file' name="image" />
                            <label>genreId</label>
                            <Field type='number' name="genreId" placeholder='Код жанру' />
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