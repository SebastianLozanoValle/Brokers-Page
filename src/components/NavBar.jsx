import { Box, Flex, VStack, Image, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Link as ChakraLink } from "@chakra-ui/react";
import { useState, useEffect } from "react";


import logo from "../assets/img/logo_nav.png";
import CustomNavLink from "./CustomNavLink";
import imagen from '../assets/img/logoempresa.png';
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";


export const NavBar = ({ isMobile }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            maxW='100vw'
            position="fixed"
            top="0"
            left="0" 
            right="0"
            zIndex="999"
            bg="brand.background"
            color="brand.secondary"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)" // Puedes ajustar la sombra según tus preferencias
        >
            {/* Barra de navegación */}
            <Flex
                p={4}
                align="center"
                fontSize={20}
                fontWeight="bold"
            >
                <Image src={logo} alt="Logo" boxSize="50px" ml='2vw' width={250} />

                {isMobile ? (
                    // Menú hamburguesa para móviles
                    <Box ml='auto' display={{ base: "block", md: "none" }}>
                        <Button onClick={onOpen} bg='none' fontSize={30} color='brand.secondary'>
                            ☰
                        </Button>
                    </Box>
                ) : (
                    // Menú para escritorio
                    <Flex ml="auto" align="center" color='white'>
                        {/* Puedes agregar más elementos aquí */}
                        <CustomNavLink to='/' children='Inicio' />
                        <CustomNavLink to='/nosotros' children='Nosotros' />
                        <CustomNavLink to='/servicios' children='Servicios' />
                        <CustomNavLink to='/boletin' children='Boletín' />
                        <CustomNavLink to='/contacto' children='Contacto' />
                    </Flex>
                )}

                <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent bg='black'>
                        <DrawerCloseButton />
                        <DrawerHeader color='white'>Menú</DrawerHeader>
                        <DrawerBody >
                            <VStack spacing="3" paddingTop='60px' display='flex' justifyContent='center'>
                                {/* Puedes agregar más elementos aquí */}
                                <CustomNavLink to="/" onClick={onClose} children="Inicio"/>
                                <CustomNavLink to="/nosotros" onClick={onClose} children="Nosotros" />
                                <CustomNavLink to="/servicios" onClick={onClose} children="Servicios" />
                                <CustomNavLink to="/boletin" onClick={onClose} children="Boletín" />
                                <CustomNavLink to="/contacto" onClick={onClose} children="Contacto" />
                                <Box pt={10}
                                display='flex'
                                backgroundPosition='center'
                                >
                                <img src={imagen}/>
                                </Box>
                                <Box display='flex' color='white' gap='20px'>
                               <a target='_blank' href="https://www.facebook.com/mcshipbrokers/?locale=es_LA"><Box fontSize='20px'>{<FaFacebookF />}</Box></a>
                               <a target='_blank' href="https://www.linkedin.com/company/2879222/admin/feed/posts/"><Box fontSize={'20px'}>{<CiLinkedin />}</Box></a>
                               <a target='_blank' href="https://www.instagram.com/mcshipbrokersint/"><Box fontSize={'20px'}>{<FaInstagram />}</Box></a>
                               </Box>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Box>
    );
};
