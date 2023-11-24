import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import './carrusel.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Container, Heading } from '@chakra-ui/react';

export const Carrusel = ({ maritimo, aereo, terrestre }) => {
    return (
        <div className='container'>
            <Swiper
                effect='coverflow'
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView='auto'
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                className='swiper_container'
            >
                <SwiperSlide>
                    <img src={maritimo}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={aereo}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={terrestre}></img>
                </SwiperSlide>
                <div className='slider-controller'>
                    <div className='swiper-button-prev slider-arrow'>
                        <FaArrowAltCircleLeft />
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <FaArrowAltCircleRight />
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </Swiper>
        </div>
    )
}