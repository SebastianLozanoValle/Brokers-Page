import { ImRadioUnchecked } from "react-icons/im";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react"
import banner1 from '../assets/img/banner_servicios.png'
import { Tarjeta } from "../components/Tarjeta";
import { GenericChild2 } from "../components/GenericChild2";

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
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    >
                        En MC Shipbrokers contamos con múltiples soluciones logísticas para tu negocio. Junto a nuestra especialidad en procesos eficientes de transporte nacional e internacional.
                        <br />
                        <br />
                        Estamos certificados por la alianza internacional de carga Northstar y la DF Aliance en el servicio de carga marítima y aérea, dentro de nuestro portafolio de servicios se encuentran los siguientes servicios:
                    </Text>
                    <Container
                        maxW="100%"
                        // width='100%'
                        pt={10}
                        // px={20}
                    >
                        <Flex flexWrap="wrap">
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Tarjeta boxShadow={'2xl'} child1={'01'} child2={'Transporte internacional marítimo.'} fontSizeChild1='5xl' fontWeightChild2='bold' altura="100%" colorHover="gray.600" />
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Tarjeta boxShadow={'2xl'} child1={'02'} child2={'Transporte internacional aéreo.'} fontSizeChild1='5xl' fontWeightChild2='bold' altura="100%" colorHover="gray.600" />
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Tarjeta boxShadow={'2xl'} child1={'03'} child2={'Transporte terrestre nacional e internacional.'} fontSizeChild1='5xl' fontWeightChild2='bold' altura="100%" colorHover="gray.600" />
                            </Box>
                        </Flex>
                        <Flex flexWrap="wrap">
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Tarjeta boxShadow={'lg'} child1={'04'} child2={'Seguros internacionales de mercancías.'} fontSizeChild1='5xl' fontWeightChild2='bold' altura="100%" colorHover="gray.600" />
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" pr={{ base: "4", md: "4", lg: "12" }} maxWidth="100%">
                                <Tarjeta boxShadow={'2xl'} child1={'05'} child2={'Agenciamiento aduanero.'} fontSizeChild1='5xl' fontWeightChild2='bold' altura="100%" colorHover="gray.600" />
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

                            <Tarjeta
                                margin={4}
                                boxShadow={'2xl'}
                                child1={<ImRadioUnchecked />}
                                child2={<GenericChild2 titulo={'Coordinación de Operaciones'} child={<>Carga en importación y exportación vía marítima en las modalidades:<br/><b>FCL - Full Container Load /OPEN TOP, FLAT, FLAT RACK, ISO TANQUE, REFFER.</b></>} />}
                                fontSizeChild1={{ base: "4xl", md: "0", lg: "50px", xl: '100px' }}
                                colorChild1='brand.primary' 
                            />
                            
                            <Tarjeta
                                margin={4}
                                boxShadow={'2xl'}
                                child1={<ImRadioUnchecked />}
                                child2={<GenericChild2 titulo={'Tipos de carga'} child={<>Menajes, cargas de proyecto, cargas a granel, cargas liquidas, gaseosas, carga química o DG y carga viva.</>} />}
                                fontSizeChild1={{ base: "4xl", md: "0", lg: "50px", xl: '100px' }}
                                colorChild1='brand.primary' 
                            />

                            <Tarjeta
                                margin={4}
                                boxShadow={'2xl'}
                                child1={<ImRadioUnchecked />}
                                child2={<GenericChild2 titulo={'Carga suelta'} child={<>Less Container Load /Break Bulk. Multimodal (<b>OTM, DTA, OTMI, DTAI</b>), en contenedor o carga suelta.</>} />}
                                fontSizeChild1={{ base: "4xl", md: "0", lg: "50px", xl: '100px' }}
                                colorChild1='brand.primary' 
                            />
                            
                        </Box>
                    </Flex>
                </Container>
            </Box>
            {/* trercera sub subseccion */}
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
                            >Transporte internacional aéreo</Heading>
                        </Box>
                        <Box flex={3} p={4}>

                            <Tarjeta
                                margin={4}
                                boxShadow={'2xl'}
                                child1={<ImRadioUnchecked />}
                                child2={<GenericChild2 titulo={'Coordinación de Operaciones'} child={<>Carga en importación y exportación vía aérea.</>} />}
                                fontSizeChild1={{ base: "4xl", md: "0", lg: "50px", xl: '100px' }}
                                colorChild1='brand.primary' 
                            />
                            
                            <Tarjeta
                                margin={4}
                                boxShadow={'2xl'}
                                child1={<ImRadioUnchecked />}
                                child2={<GenericChild2 titulo={'Tipos de carga'} child={<>Carga general, perecedera, viva, peligrosa.</>} />}
                                fontSizeChild1={{ base: "4xl", md: "0", lg: "50px", xl: '100px' }}
                                colorChild1='brand.primary' 
                            />
                            
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}