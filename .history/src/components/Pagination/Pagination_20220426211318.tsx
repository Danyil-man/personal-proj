import React from 'react';



const PaginationBar = () => {
    const pages = [1, 2, 3]
    return (
        <Pagination>
            {pages.map(page => <Pagination.Item>{page}</Pagination.Item>)}
        </Pagination>
    )
}

export default PaginationBar