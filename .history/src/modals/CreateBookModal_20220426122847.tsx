import { Field, Form, Formik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { chooseGenreBook, createBook } from '../store/redux/reducers/booksReducer';
import { getAllGenres } from '../store/redux/reducers/filterReducer';
import { AppStateType } from '../store/redux/store';
import { createBookType, GenresType } from '../types/generalTypes';

type CreateBookModalType = {
    show: boolean
    onHide: () => void
}

const CreateBookModal: FC<CreateBookModalType> = ({ show, onHide }) => {
    const [file, setFile] = useState(null)
    const { genres } = useSelector((state: AppStateType) => state.filter)
    const { genreBook } = useSelector((state: AppStateType) => state.books)

    const dispatch = useDispatch()

    const addFile = (e: any) => {
        setFile(e.target.files[0])
        console.log(file)
    }

    const addBook = (values: any) => {
        const formData = new FormData()
        const book: createBookType = {
            name: formData.append('name', values.name),
            author: formData.append('author', values.author),
            description: formData.append('description', values.description),
            price: formData.append('price', values.price),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            image: formData.append('image', file),
            genreId: formData.append('genreId', values.genreId)
        }
        dispatch(createBook(book))
    }

    const chooseGenre = (genreBookName: GenresType) => {
        dispatch(chooseGenreBook(genreBookName))
        console.log(genreBookName.name)
    }


    useEffect(() => {
        dispatch(getAllGenres())
    }, [genreBook])
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
                        image: file,
                        genreId: genreBook.id
                    }} onSubmit={addBook}>
                        <Form>
                            <div>
                                <label>Назва книги</label>
                                <Field type="text" name="name" placeholder='назва книги' />
                            </div>
                            <div>
                                <label>Автор</label>
                                <Field type="text" name="author" placeholder='Автор' />
                            </div>
                            <div>
                                <label>Опис</label>
                                <Field type="text" name="description" placeholder='Опис книги' />
                            </div>
                            <div>
                                <label>Ціна</label>
                                <Field type="number" name="price" placeholder='Вартість книги' />
                            </div>
                            <div>
                                <label>Фото</label>
                                <Field type='file' name='image' onChange={addFile} />
                            </div>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {genreBook.name ? genreBook.name : 'Виберіть жанр'}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {genres.map(genre => <Dropdown.Item
                                            onClick={() => chooseGenre(genre)}
                                            key={genre.id}>{genre.name}</Dropdown.Item>)}

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
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

export default CreateBookModal