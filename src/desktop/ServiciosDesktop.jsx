import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { TarjetaTransporte } from "../components/TarjetaTransporte"
import { TarjetaServicios } from "../components/TarjetaServicios"
import { CardList } from "../components/CardList"

export const ServiciosDesktop = ({ maritimo, aereo, terrestre, Lista1, Lista2, banner1 }) => {
    return (
        <>
            <Box
                bg={`url(${banner1})`}
                // height='100vh'
                backgroundSize='cover'
                backgroundPosition='top'
                backgroundRepeat='no-repeat'
                // width='100vw'
                filter="grayscale(50%)"
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
                                <a href="#transporte-maritimo"><TarjetaServicios child1={'01'} child2={'Transporte internacional marítimo.'} /></a>
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <a href="#transporte-aereo"><TarjetaServicios child1={'02'} child2={'Transporte internacional aéreo.'} /></a>
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <a href="#transporte-terrestre"><TarjetaServicios child1={'03'} child2={'Transporte terrestre nacional e internacional.'} /></a>
                            </Box>
                        </Flex>
                        <Flex flexWrap="wrap">
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <a href="#adicionales"><TarjetaServicios child1={'04'} child2={'Seguros internacionales de mercancías.'} /></a>
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" pr={{ base: "4", md: "4", lg: "12" }} maxWidth="100%">
                                <a href="#adicionales"><TarjetaServicios child1={'05'} child2={'Agenciamiento aduanero.'} /></a>
                            </Box>
                        </Flex>
                    </Container>
                </Container>
            </Box>
            {/* segunda sub seccion */}
            <Box
                mt={82}
                bg={`url(${maritimo})`}
                backgroundPosition='bottom left'
                backgroundRepeat='no-repeat'
                backgroundSize={{ base: '35vw', md: '55vw', lg: '35vw' }}
                minH={{ base: "370px", md: "860pxpx", lg: '100vh' }}
                id="transporte-maritimo"
            >
                <Container maxW="90%" pt={20} height='100%'>
                    <Flex flexWrap='wrap' height='100%'>
                        <Box flex={{ base: "1", md: "1.5", lg: "1.5" }} py={4}>
                            <Heading fontSize='5xl' borderBottom='solid' color='brand.primary'>
                                Transporte internacional marítimo
                            </Heading>
                        </Box>
                        <Box flex={{ base: "0", md: "1", lg: "1" }}></Box>
                        <Flex
                            flex={{ base: "1", md: "2.5", lg: "2.5" }}
                            py={4}
                            alignItems='center'
                            flexDirection='column'
                            height='100%'
                        >
                            <TarjetaTransporte titulo={'Coordinación de Operaciones'} child={<>Carga en importación y exportación vía marítima en las modalidades:<br /><b>FCL - Full Container Load /OPEN TOP, FLAT, FLAT RACK, ISO TANQUE, REFFER.</b></>} />
                            <TarjetaTransporte titulo={'Tipos de carga'} child={<>Menajes, cargas de proyecto, cargas a granel, cargas liquidas, gaseosas, carga química o DG y carga viva.</>} />
                            <TarjetaTransporte titulo={'Carga suelta'} child={<>Less Container Load /Break Bulk.<br />Multimodal (<b>OTM, DTA, OTMI, DTAI</b>), en contenedor o carga suelta.</>} />

                        </Flex>
                    </Flex>
                </Container>
            </Box>
            {/* trercera sub subseccion */}
            <Box
                mt={82}
                bg={`url(${aereo})`}
                backgroundPosition='bottom left'
                backgroundRepeat='no-repeat'
                backgroundSize={{ base: '35vw', md: '55vw', lg: '35vw' }}
                minH={{ base: "370px", md: "860px", lg: '100vh' }}
                id="transporte-aereo"
            >
                <Container maxW="90%" pt={20} height='100%'>
                    <Flex flexWrap='wrap' height='100%'>
                        <Box flex={{ base: "1", md: "1.5", lg: "1.5" }} py={4}>
                            <Heading fontSize='5xl' borderBottom='solid' color='brand.primary'>
                                Transporte internacional aéreo
                            </Heading>
                        </Box>
                        <Box flex={{ base: "0", md: "1", lg: "1" }}></Box>
                        <Flex
                            flex={{ base: "1", md: "2.5", lg: "2.5" }}
                            py={4}
                            alignItems='center'
                            flexDirection='column'
                            height='100%'
                        >
                            <TarjetaTransporte titulo={'Coordinación de Operaciones'} child={<>Carga en importación y exportación vía aérea.</>} />
                            <TarjetaTransporte titulo={'Tipos de carga'} child={<>Carga general, perecedera, viva, peligrosa.</>} />

                        </Flex>
                    </Flex>
                </Container>
            </Box>
            {/* cuarta sub seccion */}
            <Box
                mt={82}
                bg={`url(${terrestre})`}
                backgroundPosition='bottom left'
                backgroundRepeat='no-repeat'
                backgroundSize={{ base: '35vw', md: '55vw', lg: '35vw' }}
                minH={{ base: "370px", md: "860px", lg: '100vh' }}
                id="transporte-terrestre"
            >
                <Container maxW="90%" pt={20} height='100%'>
                    <Flex flexWrap='wrap' height='100%'>
                        <Box flex={{ base: "1", md: "1.5", lg: "1.5" }} py={4}>
                            <Heading fontSize='5xl' borderBottom='solid' color='brand.primary'>
                                Transporte terrestre nacional e internacional
                            </Heading>
                        </Box>
                        <Box flex={{ base: "0", md: "1", lg: "1" }}></Box>
                        <Flex
                            flex={{ base: "1", md: "2.5", lg: "2.5" }}
                            py={4}
                            alignItems='center'
                            flexDirection='column'
                            height='100%'
                        >
                            <TarjetaTransporte titulo={'Cobertura'} child={<>Transporte terrestre en contenedores completos o de carga suelta (<b>FCL / LCL</b>).</>} />
                            <TarjetaTransporte titulo={'Operaciones'} child={<>Transporte multimodal (<b>OTM</b>)<br />Tránsito aduanero (<b>DTA</b>)<br />Tránsito aduanero internacional (<b>DTAI</b>)<br /><b>ITR</b> / Desconsolidación.</>} />
                            <TarjetaTransporte titulo={'Otros'} child={<>Cargue y descargue de mercancías.</>} />

                        </Flex>
                    </Flex>
                </Container>
            </Box>

            {/* //servicios adicionales */}
            <Box py={10} id="adicionales">

                <Container maxW="90%" py={20}>
                    <Center>
                        <Heading mb={10} fontSize='5xl' borderBottom='solid' color='brand.primary'>
                            Servicios adicionales
                        </Heading>
                    </Center>
                    <Flex flexWrap={'wrap'}>
                        <CardList titulo='Agenciamiento aduanero' lista={Lista1} />
                        <CardList titulo='Seguros internacionales de mercancias' lista={Lista2} />
                    </Flex>
                </Container>
            </Box>
        </>
    )
}