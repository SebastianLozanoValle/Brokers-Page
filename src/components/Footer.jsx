// import { Box, Container, Flex, Link as CustomLink, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa";

// export const Footer = () => 
//     <footer>
//         <Box height='50vh' mt="auto" py="8" bg="#000" color="#fff" p={9}>
//             <Container maxW="90%" py={20}>
//                 <Flex justify="space-between" align="center">
//                     <Text>&copy; 2023 Tu Empresa</Text>
//                     <Flex>
//                     <CustomLink as={Link} mx="2" to="/terminos">
//                         Términos de Servicio
//                     </CustomLink>
//                     <CustomLink as={Link} mx="2" to="/privacidad">
//                         Política de Privacidad
//                     </CustomLink>
//                     </Flex>
//                 </Flex>
//             </Container>
//             <a target='_blank' href="http://wa.me/573138461114" rel="nofollow noopener noreferrer" className='flotante ezquina'><FaWhatsapp className='ezquina' /></a>
//         </Box>
//     </footer>

import React from 'react';
import { Box, Center, Container, Flex, Img } from "@chakra-ui/react";
import { Link as CustomLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import logoempresa from '../assets/img/logoempresa.png';

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
                        width='200px'
                        flex={1}
                    />
                    <Container
                        display='block'
                        textAlign='just'
                        margin='0px'
                        height='100%'
                        flex={1}
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
                        <CustomLink as={Link} to={'/pservicios'}>
                            Prestacion de servicios
                        </CustomLink>
                    </Container>

                    <Box flex={1}>
                        <Container width='auto' display='flex' gap='40px' justifyContent='center' alignItems='center'>
                            <a href="https://www.facebook.com/mcshipbrokers/?locale=es_LA"><Box fontSize='40px'>{<FaFacebookF />}</Box></a>
                            <a href="https://www.linkedin.com/company/2879222/admin/feed/posts/"><Box fontSize={'40px'}>{<CiLinkedin />}</Box></a>
                            <a href="https://www.instagram.com/mcshipbrokersint/"><Box fontSize={'40px'}>{<FaInstagram />}</Box></a>
                        </Container>
                    </Box>

                    <a target='_blank' href="http://wa.me/573138461114" rel="nofollow noopener noreferrer" className='flotante ezquina'><FaWhatsapp className='ezquina' /></a>
                </Flex>
            </Container>
        </Box>
    </footer>
);
