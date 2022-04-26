import { Field, Form, Formik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { chooseGenreBook, createBook } from '../../store/redux/reducers/booksReducer';
import { getAllGenres } from '../../store/redux/reducers/filterReducer';
import { AppStateType } from '../../store/redux/store';
import { createBookType, GenresType } from '../../types/generalTypes';
import style from './CreateBookModal.module.scss'

type CreateBookModalType = {
    show: boolean
    onHide: () => void
}

const CreateBookModal: FC<CreateBookModalType> = ({ show, onHide }) => {
    const [file, setFile] = useState('')
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    const { genres } = useSelector((state: AppStateType) => state.filter)
    const { genreBook } = useSelector((state: AppStateType) => state.books)

    const dispatch = useDispatch()

    const addFile = (e: any) => {
        setFile(e.target.files[0])
        console.log(file)
    }

    const addBook = () => {
        const formData = new FormData()
        formData.append('name', name),
            formData.append('author', author),
            formData.append('description', description),
            formData.append('price', `${price}`),
            formData.append('image', file),
            formData.append('genreId', `${genreBook.id}`)

        dispatch(createBook(formData))
        setFile('')
        setName('')
        setAuthor('')
        setDescription('')
        setPrice('')
    }

    const chooseGenre = (genreBookName: GenresType) => {
        dispatch(chooseGenreBook(genreBookName))
        console.log(genreBookName)
    }


    useEffect(() => {
        dispatch(getAllGenres())
    }, [])
    return (
        <>
            <Modal
                size="lg"
                centered
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new book
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={style.formBlock}>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Name</label>
                            <input className={style.formItemInput} type='text' onChange={(e: any) => setName(e.target.value)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Author</label>
                            <input className={style.formItemInput} type='text' onChange={(e: any) => setAuthor(e.target.value)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Description</label>
                            <input className={style.formItemInput} type='text' onChange={(e: any) => setDescription(e.target.value)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Price</label>
                            <input className={style.formItemInput} type='text' onChange={(e: any) => setPrice(e.target.value)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Photo</label>
                            <input className={style.formItemInput} type='file' onChange={addFile} />
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {genreBook.name ? genreBook.name : 'Choose genre'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {genres.map(genre => <Dropdown.Item
                                        onClick={() => chooseGenre(genre)}
                                        key={genre.id}>{genre.name}</Dropdown.Item>)}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    {/* <Formik initialValues={{
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
                                <input type='file' name='image' onChange={addFile} />
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

                    </Formik> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='dark' onClick={onHide}>Close</Button>
                    <Button type='submit' onClick={addBook}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateBookModal