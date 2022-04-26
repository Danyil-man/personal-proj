import React from 'react';
import { Pagination } from 'react-bootstrap';



const PaginationBar = () => {
    const pages = [1, 2, 3]
    return (
        <Pagination>
            {pages.map(page => <Pagination.Item key={page}>{page}</Pagination.Item>)}
        </Pagination>
    )
}

export default PaginationBar