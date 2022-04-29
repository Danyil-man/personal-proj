import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateBookModal from '../../modals/CreateBookModal/CreateBookModal';
import CreateGenreModal from '../../modals/CreateGenreModal';
import style from './Admin.module.scss'
const Admin = () => {
    const [genreVidible, setGenreVisible] = useState(false)
    const [bookVidible, setBookVisible] = useState(false)
    return (
        <div className={style.container}>
            <button className={style.createBtn} onClick={() => setGenreVisible(!genreVidible)}>Додати Жанр</button>
            <button className={style.createBtn} onClick={() => setBookVisible(!bookVidible)}>Додати Книгу</button>

            <CreateGenreModal show={genreVidible} onHide={() => setGenreVisible(!genreVidible)} />
            <CreateBookModal show={bookVidible} onHide={() => setBookVisible(!bookVidible)} />

        </div>
    )
}

export default Admin