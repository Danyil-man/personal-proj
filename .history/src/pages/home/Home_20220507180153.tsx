import React, { FC, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../components/cards/Cards';
import Categories from '../../components/categories/Categories';
import CarouselBlock from '../../components/common/Carousel/CarouselBlock';
import PaginationBar from '../../components/common/Pagination/Pagination';
import Filter from '../../components/filter/Filter';
import SearchBook from '../../components/SearchBook/SearchBook';
import { filterByName, filterByPrice, getAllBooks, setFilter } from '../../store/redux/reducers/booksReducer';
import { getAllGenres } from '../../store/redux/reducers/filterReducer';
import { AppStateType } from '../../store/redux/store';
import style from './Home.module.scss'


const Home = () => {
    const dispatch = useDispatch()
    const [searchBook, setSearchBook] = useState('');
    const { filterId, page, limit, filteredName, filteredPrice } = useSelector((state: AppStateType) => state.books)

    const filterGenres = (filterID: number) => {
        dispatch(setFilter(filterID))
    }
    const filterByBookName = (name: string) => {
        dispatch(filterByName(name))
    }

    const filterByBookPrice = (price: string) => {
        dispatch(filterByPrice(price))
    }
    useEffect(() => {
        dispatch(getAllBooks(filterId, page, limit, filteredName, filteredPrice))
    }, [page, filterId, filteredName, filteredPrice])

    useEffect(() => {
        dispatch(getAllGenres())
    }, [])


    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <CarouselBlock />
                <Categories filterGenres={filterGenres} />
                <Filter
                    filterByBookName={filterByBookName}
                    filterByPrice={filterByBookPrice}
                />
                <SearchBook searchBook={searchBook} setSearchBook={setSearchBook} />
                <Cards searchBook={searchBook} />
                <PaginationBar />
            </div>
        </div>
    )
}

export default Home