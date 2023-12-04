import React from 'react';
import { Box, Center, Container, Flex, Img } from "@chakra-ui/react";
import { Link as CustomLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import logoempresa from '../assets/img/logoempresa.png';
import servicios from '../assets/documents/2. F 002 V.1 2020 Contrato de servicios de Agenciamiento de carga Internacional.pdf'

export const Footer = () => (
    <footer>
        <Box w='100vw' bg="#000">
            <Container minW='90vw'>
                <Flex
                    bg="#000"
                    color="#fff"
                    p={9}
                    justifyContent='center'
                    width='100%'
                    height='100%'
                    flexWrap='wrap' // Hace que los elementos se coloquen en columna cuando el espacio es insuficiente
                    align='center'
                >
                    <Img
                        src={logoempresa}
                        height='auto'
                        maxW={{ base: '150px', md: '200px', lg: '250px' }}
                        flex={1}
                        mb={{ base: 6, md: 0, lg: 0 }}
                    />
                    <Container
                        display='block'
                        textAlign='just'
                        margin='0px'
                        height='100%'
                        flex={1}
                        mb={{ base: 6, md: 0, lg: 0 }}
                    >
                        <CustomLink as={Link} to={'/'}>
                            Inicio
                        </CustomLink><br />
                        <CustomLink as={Link} to={'/contacto'}>
                            Contacto
                        </CustomLink><br />
                        <CustomLink as={Link} to={'/politica'}>
                            Politica tratamiento de datos
                        </CustomLink><br />
                        <CustomLink href={servicios} download={'6. F 006 V.1 2020  Politica de tratamiento de datos.pdf'}>
                            Prestación de servicios
                        </CustomLink>
                    </Container>

                    <Box flex={1}>
                        <Container width='auto' display='flex' gap='40px' justifyContent='center' alignItems='center'>
                            <a target='_blank' href="https://www.facebook.com/mcshipbrokers/?locale=es_LA"><Box fontSize='40px'>{<FaFacebookF />}</Box></a>
                            <a target='_blank' href="https://www.linkedin.com/company/2879222/admin/feed/posts/"><Box fontSize={'40px'}>{<CiLinkedin />}</Box></a>
                            <a target='_blank' href="https://www.instagram.com/mcshipbrokersint/"><Box fontSize={'40px'}>{<FaInstagram />}</Box></a>
                        </Container>
                    </Box>  
                         
                       <a target='_blank' href="http://wa.me/573138461114" rel="nofollow noopener noreferrer" className='flotante ezquina'><FaWhatsapp className='ezquina' /></a>
                </Flex>
                <Box textAlign='center' justifyContent='center' color='white' paddingBottom='20px' fontSize='14px'>
                            &copy; 2023 MC Shipbrokers, Todos los derechos reservados <br/>
                            Create By: Netword<br/>
                            <a href='mailto:networdcol@gmail.com'>networdcol@gmail.com</a>
                        </Box>
            </Container>
            
        </Box>
    </footer>
);
