import React from 'react';
import { Carousel } from 'react-bootstrap';
import style from './Carousel.module.scss';


const CarouselBlock = () => {
    return (
        <Carousel fade indicators={false} >
            <Carousel.Item>
                <img className={style.imgCarousel}
                    src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner2_mnjovs.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className={style.carouselCaption}>
                    <h1 className={style.carouselHeadText}>Ласкаво просимо <br /> до <span className={style.storeName}>ReadBook</span></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={style.imgCarousel}
                    src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner1_qmdqjf.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className={style.carouselCaption} >
                    <h2 className={style.carouselHeadText}>Читання чарівної книги покращить твоє самопочуття</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={style.imgCarousel}
                    src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner3_dzmrl9.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2 className={`${style.carouselHeadText}`}>у <span className={style.storeName}>ReadBook Store</span></h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default CarouselBlock