import { Box, Container, Flex, Link as CustomLink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => 
    <footer>
        <Box height='50vh' mt="auto" py="8" bg="#000" color="#fff" p={9}>
            <Container maxW="90%" py={20}>
                <Flex justify="space-between" align="center">
                    <Text>&copy; 2023 Tu Empresa</Text>
                    <Flex>
                    <CustomLink as={Link} mx="2" to="/terminos">
                        Términos de Servicio
                    </CustomLink>
                    <CustomLink as={Link} mx="2" to="/privacidad">
                        Política de Privacidad
                    </CustomLink>
                    </Flex>
                </Flex>
            </Container>
            <a target='_blank' href="http://wa.me/573138461114" rel="nofollow noopener noreferrer" className='flotante ezquina'><FaWhatsapp className='ezquina' /></a>
        </Box>
    </footer>
