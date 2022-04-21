import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Admin = () => {
    const [genreVidible, setGenreVisible] = useState(false)
    const [bookVidible, setBookVisible] = useState(false)
    return (
        <div>
            <Button>Додати Жанр</Button>
            <Button>Додати Книгу</Button>
        </div>
    )
}

export default Admin