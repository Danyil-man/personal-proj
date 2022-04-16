import React from 'react';
import Categories from '../../components/categories/Categories';
import 'bootstrap/dist/css/bootstrap.min.js';

import style from './Home.module.scss'

const Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/* <img src='https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg' alt="" /> */}
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>


                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="https://res.cloudinary.com/wunu/image/upload/v1650108776/personalproject/baner_irfxbq.jpg" alt="Los Angeles" />
                        </div>

                        <div className="item">
                            <img src="https://res.cloudinary.com/wunu/image/upload/v1650108816/personalproject/banner2_l3lf7e.jpg" alt="Chicago" />
                        </div>

                        <div className="item">
                            <img src="https://res.cloudinary.com/wunu/image/upload/v1650120360/personalproject/2201_w023_n001_1694b_p1_1694_jdv6ch.jpg" alt="New York" />
                        </div>
                    </div>


                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <Categories />
            </div>
        </div>
    )
}

export default Home