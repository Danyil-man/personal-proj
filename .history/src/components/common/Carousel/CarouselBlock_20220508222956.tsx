import React from 'react';
import { Carousel } from 'react-bootstrap';
import { carouselFirstBlock1st, carouselFirstBlock2nd, carouselSecondBlock1st, carouselSecondBlock2nd, readBookStore, storeName } from '../../../consts/generalConsts';
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
                    <h1 className={style.carouselHeadText}>{carouselFirstBlock1st} <br /> {carouselFirstBlock2nd} <span className={style.storeName}>{storeName}</span></h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={style.imgCarousel}
                    src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner1_qmdqjf.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className={style.carouselCaption} >
                    <h2 className={style.carouselSlang}>{carouselSecondBlock1st}  <br /> {carouselSecondBlock2nd}</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className={style.imgCarousel}
                    src="https://res.cloudinary.com/wunu/image/upload/v1650121903/personalproject/banner3_dzmrl9.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className={style.magicCaption}>
                    <h1 className={`${style.carouselHeadText}`}>у <span className={style.storeName}>{readBookStore}</span></h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default CarouselBlock