import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import { CardTransporte } from './CardTransporte';
import { ItemList } from '../pure/ItemList';

export const Carrusel = ({ maritimo, aereo, terrestre }) => {
    return (
        <>
            <span id='transporte-maritimo'></span>
            <span id='transporte-aereo'></span>
            <span id='transporte-terrestre'></span>
            <Container py={20} maxW='90vw'>
                {/* <Center><Heading>Transporte</Heading></Center> */}
                <Box
                    boxShadow='2xl'
                    borderRadius={20}
                    height={'auto'}
                    bg='brand.primary'
                >
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
                            <CardTransporte
                                imagen={maritimo}
                                titulo='transporte maritimo'
                                child={
                                    <>
                                        <ItemList child={<Heading fontSize='md'>Coordinación de Operaciones</Heading>} />
                                        <Text fontSize='xs'>Carga en importación y exportación vía marítima en las modalidades:<br /><b>FCL - Full Container Load /OPEN TOP, FLAT, FLAT RACK, ISO TANQUE, REFFER.</b></Text>
                                        <ItemList child={<Heading fontSize='md'>Tipos de carga</Heading>} />
                                        <Text fontSize='xs'>Menajes, cargas de proyecto, cargas a granel, cargas liquidas, gaseosas, carga química o DG y carga viva.</Text>
                                        <ItemList child={<Heading fontSize='md'>Carga suelta</Heading>} />
                                        <Text fontSize='xs'>Less Container Load /Break Bulk.<br />Multimodal (<b>OTM, DTA, OTMI, DTAI</b>), en contenedor o carga suelta.</Text>
                                    </>
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardTransporte
                                imagen={aereo}
                                titulo='transporte aereo'
                                child={''}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardTransporte
                                imagen={terrestre}
                                titulo='transporte terrestre'
                                child={''}
                            />
                        </SwiperSlide>
                        
                    </Swiper>
                    <Box>
                        <Center position={'relative'}>
                            <div className='swiper-button-prev slider-arrow'>
                            </div>
                            <div className='swiper-button-next slider-arrow'>
                            </div>
                            <Center><div className='swiper-pagination'></div></Center>
                        </Center>
                    </Box>
                </Box>
                
            </Container>
        </>
    )
}