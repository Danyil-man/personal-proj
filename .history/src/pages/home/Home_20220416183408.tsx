import React from 'react';
import { Carousel } from 'react-bootstrap';
import Categories from '../../components/categories/Categories';


import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/* <img src='https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg' alt="" /> */}
                <Carousel className={style.carousel}>
                    <Carousel.Item>
                        <img

                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner2_mnjovs.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className={style.carouselHeadText}>Welcome to ReadBook Store</h3>
                            <h3 className={style.carouselHeadText}>Monday - Friday</h3>
                            <p className={style.carouselHeadText}>From 9a.m. to 9p.m.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner1_qmdqjf.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className={style.carouselHeadText}>Read magic book will make you feel better</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner3_dzmrl9.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className={style.carouselHeadText}>in ReadBook Store</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Categories />
            </div>
        </div>
    )
}

export default Home