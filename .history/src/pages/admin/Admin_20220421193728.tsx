import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import BookModal from '../../modals/BookModal';
import CreateGenreModal from '../../modals/CreateGenreModal';

const Admin = () => {
    const [genreVidible, setGenreVisible] = useState(false)
    const [bookVidible, setBookVisible] = useState(false)
    return (
        <div>
            <Button>Додати Жанр</Button>
            <Button>Додати Книгу</Button>

            <BookModal />
            <CreateGenreModal />
        </div>
    )
}

export default Admin