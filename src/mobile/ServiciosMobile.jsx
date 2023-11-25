import { Box, Center, Container, Flex, Heading, Link, ListItem, OrderedList, Text } from "@chakra-ui/react"
import { Carrusel } from "../components/Carrusel"
import { ItemListServicios } from "../pure/ItemListServicios"

export const ServiciosMobile = ({ maritimo, aereo, terrestre, Lista1, Lista2, banner1 }) => {
    return (
        <>
            <Box height='90vh'>
                <Box
                    className="fondo"
                    bg={`url(${banner1})`}
                    // bg='black'
                    bgSize='cover'
                    bgPos='80%'
                    // minH='100vh'
                    height='50%'
                >
                    <Box
                        className="main"
                        textAlign='center'
                        bgGradient="linear(to-t, #fff, transparent 150%)"
                        height='100%'
                        display="flex" justifyContent="center" alignItems="center"
                    >
                        <Box>
                            <Heading
                                color='#fff'
                                pt={{ base: "25px", md: "50px", lg:'50px' }}
                                position='relative'
                                fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
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
                                Nuestros servicios
                            </Heading>
                            <Box
                                pt={{ base: "3px", md: "10px", lg: '10px'}}
                                m={{ base: "20px", md: "60px", lg: '60px'}}
                                fontSize={{ base: "xs", md: "3xl", lg: "3xl" }}
                            >
                                <Text width='100%' pb={{ base: "7px", md: "30px", lg: '30px'}}>
                                En MC Shipbrokers contamos con múltiples soluciones logísticas para tu negocio. Junto a nuestra especialidad en procesos eficientes de transporte nacional e internacional.

                                </Text>
                                <Center>
                                    <Text width='100%' pt={{ base: "7px", md: "30px", lg: '30px'}}>
                                        Estamos certificados por la alianza internacionalde carga <b>Northstar</b> y la <b>DF Aliance</b> en el servicio de carga marítima y aérea, dentro de nuestro portafolio de servicios se encuentran los siguientes servicios:
                                    </Text>
                                </Center>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Container display="flex" justifyContent="center" alignItems="center" height='50%'>
                    <OrderedList color='brand.primary' fontWeight='bold'>
                        <ItemListServicios href="#transporte" child={'Transporte internacional marítimo.'} />
                        <ItemListServicios href="#transporte" child={'Transporte internacional aéreo.'} />
                        <ItemListServicios href="#transporte" child={'Transporte terrestre nacional e internacional.'} />
                        <ItemListServicios href="#adicionales" child={'Seguros internacionales de mercancÍas.'} />
                        <ItemListServicios href="#adicionales" child={'Agenciamiento aduanero.'} />
                    </OrderedList>
                </Container>
            </Box>
            <Carrusel maritimo={maritimo} aereo={aereo} terrestre={terrestre}/>
        </>
    )
}