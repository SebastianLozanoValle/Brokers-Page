import { ImRadioUnchecked } from "react-icons/im";
import { Box, Card, CardBody, Container, Flex, Heading, Text } from "@chakra-ui/react"
import banner1 from '../assets/img/banner_servicios.png'
import { Tarjeta } from "../components/Tarjeta";

export const Servicios = () => {
    return (
        <>
            <Box
                bg={`url(${banner1})`}
                // height='100vh'
                backgroundSize='cover'
                backgroundPosition='top'
                backgroundRepeat='no-repeat'
                // width='100vw'
                filter="grayscale(75%)"
            >
                <Container
                    maxW="90%"
                    py={20}
                >
                    <Heading
                        fontSize='5xl'
                        color='#fff'
                        borderBottom='solid'
                        display='inline-block'
                        // width={500}
                        textAlign='left'
                        mb={10}
                    >
                        Nuestros servicios
                    </Heading>
                    <Text
                        color='#fff'
                        fontSize='4xl'
                    >
                        En MC Shipbrokers contamos con múltiples soluciones logísticas para tu negocio. Junto a nuestra especialidad en procesos eficientes de transporte nacional e internacional.
                        <br />
                        <br />
                        Estamos certificados por la alianza internacional de carga Northstar y la DF Aliance en el servicio de carga marítima y aérea, dentro de nuestro portafolio de servicios se encuentran los siguientes servicios:
                    </Text>
                    <Container
                        maxW="100%"
                        pt={10}
                        px={20}
                    >
                        <Flex flexWrap="wrap">
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Tarjeta boxShadow={'lg'} child1={'01'} child2={'Transporte internacional marítimo.'} fontSizeChild1='5xl' height={150} fontWeightChild2='bold' />
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Tarjeta boxShadow={'lg'} child1={'02'} child2={'Transporte internacional aéreo.'} fontSizeChild1='5xl' height={150} fontWeightChild2='bold' />
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Tarjeta boxShadow={'lg'} child1={'03'} child2={'Transporte terrestre nacional e internacional.'} fontSizeChild1='5xl' height={150} fontWeightChild2='bold' />
                            </Box>
                        </Flex>
                        <Flex flexWrap="wrap">
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Tarjeta boxShadow={'lg'} child1={'04'} child2={'Seguros internacionales de mercancías.'} fontSizeChild1='5xl' height={150} fontWeightChild2='bold' />
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" pr={{ base: "4", md: "4", lg: "12" }} maxWidth="100%">
                                <Tarjeta boxShadow={'lg'} child1={'05'} child2={'Agenciamiento aduanero.'} fontSizeChild1='5xl' height={150} fontWeightChild2='bold' />
                            </Box>
                        </Flex>
                    </Container>
                </Container>
            </Box>
            {/* comienzo saegunda subseccion */}
            <Box>
                <Container
                    maxW="90%"
                    py={20}
                >
                    <Flex
                        flexWrap='wrap'
                    >
                        <Box flex={2} p={4}>
                            <Heading
                                fontSize='5xl'
                                borderBottom='solid'
                                color='brand.primary'
                            >Transporte internacional marítimo</Heading>
                        </Box>
                        <Box flex={3} p={4}>
                            <Tarjeta margin={4} boxShadow={'lg'} child1={<ImRadioUnchecked />} child2={<>
                                <Heading
                                    fontSize='5xl'
                                >
                                    Coordinación de Operaciones
                                </Heading>
                                <Text>Carga en importación y exportación vía marítima en las modalidades:<br/><b>FCL - Full Container Load /OPEN TOP, FLAT, FLAT RACK, ISO TANQUE, REFFER.</b></Text>
                            </>} fontSizeChild1='100px' colorChild1='brand.primary' />
                            <Tarjeta margin={4} boxShadow={'lg'} child1={<ImRadioUnchecked />} child2={<>
                                <Heading
                                    fontSize='5xl'
                                >
                                    Tipos de carga
                                </Heading>
                                <Text>Menajes, cargas de proyecto, cargas a granel, cargas liquidas, gaseosas, carga química o DG y carga viva.</Text>
                            </>} fontSizeChild1='100px' colorChild1='brand.primary' />
                            <Tarjeta margin={4} boxShadow={'lg'} child1={<ImRadioUnchecked />} child2={<>
                                <Heading
                                    fontSize='5xl'
                                >
                                    Carga suelta
                                </Heading>
                                <Text>Less Container Load /Break Bulk. Multimodal (<b>OTM, DTA, OTMI, DTAI</b>), en contenedor o carga suelta.</Text>
                            </>} fontSizeChild1='100px' colorChild1='brand.primary' />
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}