import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { setPageItem } from '../../store/redux/reducers/booksReducer';
import { AppStateType } from '../../store/redux/store';



const PaginationBar = () => {
    const { totalCount, limit, page } = useSelector((state: AppStateType) => state.books)
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    console.log('Totak', totalCount)
    return (
        <Pagination>
            {pages.map(pageItem => <Pagination.Item
                key={pageItem} active={page === pageItem} onClick={() => setPageItem(pageItem)} >{page}</Pagination.Item>)}
        </Pagination>
    )
}

export default PaginationBar