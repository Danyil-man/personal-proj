import React, { FC, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Cards from '../../components/cards/Cards';
import Categories from '../../components/categories/Categories';
import { getAllBooks } from '../../store/redux/reducers/booksReducer';
import { getAllGenres } from '../../store/redux/reducers/filterReducer';
import style from './Home.module.scss'


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllBooks())
        dispatch(getAllGenres())
    }, [])

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Carousel fade indicators={false} >
                    <Carousel.Item>
                        <img
                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner2_mnjovs.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className={style.carouselCaption}>
                            <h1 className={style.carouselHeadText}>Welcome to ReadBook</h1>
                            <h2 className={`${style.carouselHeadText} `}>Monday - Friday</h2>
                            <h4 className={`${style.carouselHeadText}`}>9a.m. - 9p.m.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner1_qmdqjf.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className={style.carouselCaption} >
                            <h1 className={style.carouselHeadText}>Reading magic book will make you feel better</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner3_dzmrl9.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h1 className={`${style.carouselHeadText}`}>in ReadBook Store</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Categories />
                <Cards />
            </div>
        </div>
    )
}

export default Home