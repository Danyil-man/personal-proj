import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateBookModal from '../../modals/CreateBookModal/CreateBookModal';
import CreateGenreModal from '../../modals/CreateGenreModal';

const Admin = () => {
    const [genreVidible, setGenreVisible] = useState(false)
    const [bookVidible, setBookVisible] = useState(false)
    return (
        <div>
            <button onClick={() => setGenreVisible(!genreVidible)}>Додати Жанр</button>
            <button onClick={() => setBookVisible(!bookVidible)}>Додати Книгу</button>

            <CreateGenreModal show={genreVidible} onHide={() => setGenreVisible(!genreVidible)} />
            <CreateBookModal show={bookVidible} onHide={() => setBookVisible(!bookVidible)} />

        </div>
    )
}

export default Admin