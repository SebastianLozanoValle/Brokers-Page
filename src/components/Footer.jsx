import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => 
    <footer>
        <Box mt="auto" py="8" bg="#000" color="white" p={9}>
            <Container maxW="90%" py={20}>
                <Flex justify="space-between" align="center">
                    <Text>&copy; 2023 Tu Empresa</Text>
                    <Flex>
                    <Link mx="2" href="/terminos">
                        Términos de Servicio
                    </Link>
                    <Link mx="2" href="/privacidad">
                        Política de Privacidad
                    </Link>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    </footer>
