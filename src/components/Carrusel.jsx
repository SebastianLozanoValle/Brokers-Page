import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { Box, Center, Container, Heading } from '@chakra-ui/react';
import { CardTransporte } from './CardTransporte';

export const Carrusel = ({ maritimo, aereo, terrestre }) => {
    return (
        <>
            <span id='transporte-maritimo'></span>
            <span id='transporte-aereo'></span>
            <span id='transporte-terrestre'></span>
            <Container py={20} maxW='90vw'>
                <Center><Heading>Transporte</Heading></Center>
                <Box
                    boxShadow='2xl'
                    borderRadius={20}
                >
                    
                </Box>
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
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className='swiper_container'
                >
                    <SwiperSlide>
                        <CardTransporte imagen={maritimo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aereo}></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={terrestre}></img>
                    </SwiperSlide>
                    <div className='slider-controller'>
                        <div className='swiper-button-prev slider-arrow'>
                        </div>
                        <div className='swiper-button-next slider-arrow'>
                        </div>
                        <Center><div className='swiper-pagination'></div></Center>
                    </div>
                </Swiper>
            </Container>
        </>
    )
}