import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateBookModal from '../../modals/BookModal';
import CreateGenreModal from '../../modals/CreateGenreModal';

const Admin = () => {
    const [genreVidible, setGenreVisible] = useState(false)
    const [bookVidible, setBookVisible] = useState(false)
    return (
        <div>
            <Button onClick={() => setGenreVisible(!genreVidible)}>Додати Жанр</Button>
            <Button onClick={() => setBookVisible(!bookVidible)}>Додати Книгу</Button>

            <CreateGenreModal show={genreVidible} onHide={() => setGenreVisible(!genreVidible)} />
            <CreateBookModal show={bookVidible} onHide={() => setBookVisible(!bookVidible)} />

        </div>
    )
}

export default Admin