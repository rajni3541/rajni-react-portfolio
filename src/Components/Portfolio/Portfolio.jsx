import React, { useEffect } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ecommerce from '../../img/Capture.PNG'
import monster from '../../img/Capture2.PNG'
import social from '../../img/Capture3.PNG'
import portfolio from '../../img/Capture4.PNG'
import Aos from 'aos';



const Portfolio = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='portfolio-container'>
            <div className="portfolio" data-aos="fade-up" id="portfolio">
                {/* HEADING */}
                <span>Recent Projects</span><span>Protfolio</span>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='slider'
            >
                <SwiperSlide className='sliders'><img src={monster} alt="" /></SwiperSlide>
                <SwiperSlide className='sliders'><img src={ecommerce} alt="" /></SwiperSlide>
                <SwiperSlide className='sliders'><img src={social} alt="" /></SwiperSlide>
                <SwiperSlide className='sliders'><img src={portfolio} alt="" /></SwiperSlide>
            </Swiper>

            <div className='mobile-view'>
                <img src={monster} alt="img" />
                <img src={ecommerce} alt="img" />
                <img src={social} alt="img" />
                <img src={portfolio} alt="img" />
            </div>
        </div>
    )

}

export default Portfolio