import { Box, Container, Flex, Heading, Text, Center } from "@chakra-ui/react"
import { FaGear, FaChartLine } from "react-icons/fa6";
import { RiTeamLine, RiContactsLine } from "react-icons/ri";
import fondo from '../assets/img/fondoinicio.jpg'
import { IconoInicio } from "../components/IconoInicio";

export const Inicio = () => {
    return (
        <Box
            className="fondo"
            bg={`url(${fondo})`}
            bgSize='cover'
            bgPos='80%'
            minH='100vh'
            position='relative'
            
        >  
           <Box position='absolute' top='0' right='0' bottom='0' left='0' bg='rgba(0, 0, 0, 0.5)'></Box>
          
       
            <Box
                color='#fff'
                className="main"
                textAlign='center'
                position='relative'
            >
                <Heading
                    pt={{ base: "25px", md: "50px", lg:'50px' }}
                    position='relative'
                    fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
                    _after={{
                        content: `""`,
                        position: 'absolute',
                        left: '45%',
                        bottom: '-8px',
                        width: '10%',
                        height: '2px',
                        bg: '#fff',
                        transformOrigin: 'bottom',
                        transition: 'transform 0.3s ease',
                    }}
                    _hover={{
                        '&::after': {
                            transform: 'scaleX(5)',
                        },
                    }}
                >
                    Transporte internacional de mercancias
                </Heading>
                
                <Box
                    pt={{ base: "3px", md: "10px", lg: '10px'}}
                    m={{ base: "20px", md: "60px", lg: '60px'}}
                    fontSize={{ base: "md", md: "3xl", lg: "3xl" }}
                >
                    <Text width='100%' pb={{ base: "7px", md: "30px", lg: '30px'}}>
                        Somos una empresa nacional de caracter privado,reconocida como agencia de carga internacional,<b>fundada en bogota el 6 de junio del 2012.</b> mediante la resolucion <b> 008525 del 14 de septiembre de 2022,</b> emitida por la direccion de impuestos y aduanas nacionales DIAN.
                    </Text>
                    <Center>
                        <Text width={{base: '90%', md: '70%', lg: '70%'}} pt={{ base: "7px", md: "30px", lg: '30px'}}>
                            Nuestro grupo desarrolla operaciones integrales en la coordinacion de transporte maritimo, aereo y terrestre a nivel nacional e internacional.
                        </Text>
                    </Center>
                </Box>
                
            </Box>
            
            
            <Container pt={{ base: 0, md: 11, lg: 20 }} pb={{ base: 5, md: 10, lg: 20 }} maxW={{base: '90%', md: '70%', lg: '70%'}} position='relative'>
                <Box className="cajas">
                    <Flex flexWrap='wrap' color='#fff'>
                        <IconoInicio to='/nosotros' child1={<RiTeamLine />} child2='Nosotros' />
                        <IconoInicio to='/servicios' child1={<FaGear />} child2='Servicios' />
                        <IconoInicio to='/contacto' child1={<RiContactsLine />} child2='Contacto' />
                        <IconoInicio to='/boletin' child1={<FaChartLine />} child2='Boletín' />
                    </Flex>
                </Box>
                
            </Container>
           
        </Box>
    )
}