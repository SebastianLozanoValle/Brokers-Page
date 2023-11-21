import { Box, Flex, VStack, Image, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Link as ChakraLink } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import logo from "../assets/img/logo_nav.png";
import CustomNavLink from "./CustomNavLink";

export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile, setIsMobile] = useState(false);

    // Función para manejar cambios en el tamaño de la ventana
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    // Agregar un listener para el evento resize al montar el componente
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Limpiar el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Box
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
                <Image src={logo} alt="Logo" boxSize="50px" ml='2vw' width={{ base:150, sm: 200 }} />

                {isMobile ? (
                    // Menú hamburguesa para móviles
                    <Box ml='auto' display={{ base: "block", md: "none" }}>
                        <Button onClick={onOpen} bg='none' fontSize={30} color='brand.secondary'>
                            ☰
                        </Button>
                    </Box>
                ) : (
                    // Menú para escritorio
                    <Flex ml="auto" align="center">
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
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menú</DrawerHeader>
                        <DrawerBody>
                            <VStack spacing="4">
                                {/* Puedes agregar más elementos aquí */}
                                <CustomNavLink to="/" onClick={onClose} children="Inicio" />
                                <CustomNavLink to="/nosotros" onClick={onClose} children="Nosotros" />
                                <CustomNavLink to="/servicios" onClick={onClose} children="Servicios" />
                                <CustomNavLink to="/boletin" onClick={onClose} children="Boletín" />
                                <CustomNavLink to="/contacto" onClick={onClose} children="Contacto" />
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Box>
    );
};
