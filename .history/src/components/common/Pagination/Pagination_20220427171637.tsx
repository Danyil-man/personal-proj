import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setPageItem } from '../../../store/redux/reducers/booksReducer';
import { AppStateType } from '../../../store/redux/store';
import style from './Pagination.module.scss'


const PaginationBar = () => {
    const dispatch = useDispatch()
    const { totalCount, limit, page } = useSelector((state: AppStateType) => state.books)
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    console.log('Page', page)

    const setPage = (page: number) => {
        dispatch(setPageItem(page))
    }
    return (
        <div className={style.container}>
            <Pagination >
                {pages.map(pageItem => <Pagination.Item activeLabel=''
                    key={pageItem} active={page === pageItem}
                    onClick={() => setPage(pageItem)} >{pageItem}</Pagination.Item>)}
            </Pagination>
        </div>

    )
}

export default PaginationBar