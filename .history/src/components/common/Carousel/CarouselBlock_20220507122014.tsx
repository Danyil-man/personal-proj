import React from 'react';
import { Carousel } from 'react-bootstrap';
import style from './Carousel.module.scss';


const CarouselBlock = () => {
    return (
        <div className={style.container}>
            <Carousel fade indicators={false} >
                <Carousel.Item>
                    <img className={style.imgCarousel}
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
                    <img className={style.imgCarousel}
                        src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner1_qmdqjf.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className={style.carouselCaption} >
                        <h1 className={style.carouselHeadText}>Reading magic book will make you feel better</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={style.imgCarousel}
                        src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner3_dzmrl9.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className={`${style.carouselHeadText}`}>in ReadBook Store</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>


    )
}

export default CarouselBlock