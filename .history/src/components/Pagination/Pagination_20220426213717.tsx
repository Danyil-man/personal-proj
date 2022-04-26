import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/redux/store';



const PaginationBar = () => {
    const { totalCount, limit } = useSelector((state: AppStateType) => state.books)
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination>
            {pages.map(page => <Pagination.Item key={page}>{page}</Pagination.Item>)}
        </Pagination>
    )
}

export default PaginationBar