import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { EraserFill, Search } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterBook } from '../../store/redux/reducers/booksReducer';
import { AppStateType } from '../../store/redux/store';
import style from './SearchBook.module.scss'

type SearchBookType = {
    searchBook: string
    setSearchBook: (searchBook: string) => void
}

const SearchBook: FC<SearchBookType> = ({ searchBook, setSearchBook }) => {
    const dispatch = useDispatch()
    const { filteredBook } = useSelector((state: AppStateType) => state.books)
    const setFilterBooks = (values: any) => {
        dispatch(setFilterBook(values.filter))
    }
    return (
        <div className={style.container}>
            <h3 className={style.leftText}>{searchBook ? `Шукаємо: '${filteredBook}'` : 'Усі Книги'}</h3>
            <div className={style.searchBookBlock}>
                <Search />
                <Formik initialValues={{
                    filter: ''
                }} onSubmit={setFilterBooks}>
                    <Form>
                        <Field />
                    </Form>
                </Formik>
                {/* <input maxLength={45} className={style.bookNameValue}
                    onChange={(e) => {
                        setSearchBook(e.target.value);
                    }}
                    value={searchBook}
                    placeholder="Пошук..."
                /> */}
                {/* {searchBook ? (
                    <EraserFill
                        onClick={() => setSearchBook('')}
                        className={style.clearSearchBtn}
                    />
                ) : null} */}
            </div>
        </div>
    );
};

export default SearchBook;