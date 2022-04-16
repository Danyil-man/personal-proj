import React from 'react';
import { Carousel } from 'react-bootstrap';
import Categories from '../../components/categories/Categories';


import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/* <img src='https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg' alt="" /> */}
                <Carousel >
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3>Welcome to ReadBook Store</h3>
                        </Carousel.Caption>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/wunu/image/upload/v1650108816/personalproject/banner2_l3lf7e.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/wunu/image/upload/v1650120360/personalproject/2201_w023_n001_1694b_p1_1694_jdv6ch.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Categories />
            </div>
        </div>
    )
}

export default Home