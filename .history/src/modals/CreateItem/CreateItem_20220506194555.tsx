import { Field, Form, Formik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { chooseGenreBook, createBook } from '../../store/redux/reducers/booksReducer';
import { createGenre, getAllGenres } from '../../store/redux/reducers/filterReducer';
import { AppStateType } from '../../store/redux/store';
import { GenresType } from '../../types/generalTypes';
import style from './CreateItem.module.scss'
type CreateItemType = {
    show: boolean
    onHide: () => void
}

const CreateItem: FC<CreateItemType> = ({ show, onHide }) => {
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
        setPrice(0)
    }

    const chooseGenre = (genreBookName: GenresType) => {
        dispatch(chooseGenreBook(genreBookName))
        console.log(genreBookName)
    }

    const addGenre = (values: any) => {
        dispatch(createGenre({ name: values.genre }))
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
                        Дадати нову книгу
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={style.formBlock}>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Назва</label>
                            <input className={style.formItemInput} type='text' onChange={(e: any) => setName(e.target.value)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Автор</label>
                            <input className={style.formItemInput} type='text' onChange={(e: any) => setAuthor(e.target.value)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Опис</label>
                            <input className={style.formItemInput} type='text' onChange={(e: any) => setDescription(e.target.value)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Ціна</label>
                            <input className={style.formItemInput} type='text' onChange={(e: any) => setPrice(e.target.value)} />
                        </div>
                        <div className={style.formItem}>
                            <label className={style.formItemName}>Фото</label>
                            <input className={style.formItemInput} type='file' onChange={addFile} />
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {genreBook.name ? genreBook.name : 'Вибрати жанр'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {genres.map(genre => <Dropdown.Item
                                        onClick={() => chooseGenre(genre)}
                                        key={genre.id}>{genre.name}</Dropdown.Item>)}

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Button type='submit' onClick={addBook}>
                            Добавити
                        </Button>
                    </div>

                </Modal.Body>

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
                            <div className={style.formBlock}>
                                <div className={style.formItem}>
                                    <label className={style.formItemName}>Назва жанру</label>
                                    <Field name="genre" className={style.formItemInput} />
                                </div>
                            </div>
                            <Button type='submit'>Добавити</Button>
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

export default CreateItem