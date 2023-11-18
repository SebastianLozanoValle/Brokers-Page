import { ImRadioUnchecked } from "react-icons/im";
import { Box, Card, CardBody, Container, Flex, Heading, Text } from "@chakra-ui/react"
import banner1 from '../assets/img/banner_servicios.png'

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
                                <Card
                                    boxShadow='md'
                                >
                                    <CardBody>
                                        <Flex flexWrap='wrap' align='center' height={150}>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='5xl'
                                                flex={0.3}
                                                p={2}
                                            >
                                                01
                                            </Text>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='3xl'
                                                flex={1.7}
                                                p={2}
                                            >
                                                Transporte internacional marítimo.
                                            </Text>
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Card
                                    boxShadow='md'
                                >
                                    <CardBody>
                                        <Flex flexWrap='wrap' align='center' height={150}>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='5xl'
                                                flex={0.3}
                                                p={2}
                                            >
                                                02
                                            </Text>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='3xl'
                                                flex={1.7}
                                                p={2}
                                            >
                                                Transporte internacional aéreo.
                                            </Text>
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Card
                                    boxShadow='md'
                                >
                                    <CardBody>
                                        <Flex flexWrap='wrap' align='center' height={150}>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='5xl'
                                                flex={0.3}
                                                p={2}
                                            >
                                                03
                                            </Text>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='3xl'
                                                flex={1.7}
                                                p={2}
                                            >
                                                Transporte terrestre nacional e internacional.
                                            </Text>
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </Box>
                        </Flex>
                        <Flex flexWrap="wrap">
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" maxWidth="100%">
                                <Card
                                    boxShadow='md'
                                >
                                    <CardBody>
                                        <Flex flexWrap='wrap' align='center' height={150}>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='5xl'
                                                flex={0.3}
                                                p={2}
                                            >
                                                04
                                            </Text>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='3xl'
                                                flex={1.7}
                                                p={2}
                                            >
                                                Seguros internacionales de mercancías.
                                            </Text>
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box flex={{ base: "1", md: "0.5", lg: "0.3" }} p="4" pr={{ base: "4", md: "4", lg: "12" }} maxWidth="100%">
                                <Card
                                    boxShadow='md'
                                >
                                    <CardBody>
                                        <Flex flexWrap='wrap' align='center' height={150}>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='5xl'
                                                flex={0.3}
                                                p={2}
                                            >
                                                05
                                            </Text>
                                            <Text
                                                fontWeight='bold'
                                                fontSize='3xl'
                                                flex={1.7}
                                                p={2}
                                            >
                                                Agenciamiento aduanero.
                                            </Text>
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </Box>
                        </Flex>
                    </Container>
                </Container>
            </Box>
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
                            <Card
                                boxShadow='lg'
                                margin={4}
                            >
                                <CardBody>
                                    <Flex flexWrap='wrap' align='center'>
                                        <Text
                                            fontWeight='bold'
                                            fontSize='100px'
                                            flex={0.3}
                                            p={2}
                                            color='brand.primary'
                                        >
                                            <ImRadioUnchecked />
                                        </Text>
                                        <Text
                                            fontSize='3xl'
                                            flex={1.7}
                                            p={2}
                                        >
                                            <Heading
                                                fontSize='5xl'
                                            >
                                                Coordinación de Operaciones
                                            </Heading>
                                            Carga en importación y exportación vía marítima en las modalidades:<br/><b>FCL - Full Container Load /OPEN TOP, FLAT, FLAT RACK, ISO TANQUE, REFFER.</b>
                                        </Text>
                                    </Flex>
                                </CardBody>
                            </Card>
                            <Card
                                boxShadow='lg'
                                margin={4}
                            >
                                <CardBody>
                                    <Flex flexWrap='wrap' align='center'>
                                        <Text
                                            fontWeight='bold'
                                            fontSize='100px'
                                            flex={0.3}
                                            p={2}
                                            color='brand.primary'
                                        >
                                            <ImRadioUnchecked />
                                        </Text>
                                        <Text
                                            fontSize='3xl'
                                            flex={1.7}
                                            p={2}
                                        >
                                            <Heading
                                                fontSize='5xl'
                                            >
                                                Tipos de carga
                                            </Heading>
                                            Menajes, cargas de proyecto, cargas a granel, cargas liquidas, gaseosas, carga química o DG y carga viva.
                                        </Text>
                                    </Flex>
                                </CardBody>
                            </Card>
                            <Card
                                boxShadow='lg'
                                margin={4}
                            >
                                <CardBody>
                                    <Flex flexWrap='wrap' align='center'>
                                        <Text
                                            fontWeight='bold'
                                            fontSize='100px'
                                            flex={0.3}
                                            p={2}
                                            color='brand.primary'
                                        >
                                            <ImRadioUnchecked />
                                        </Text>
                                        <Text
                                            fontSize='3xl'
                                            flex={1.7}
                                            p={2}
                                        >
                                            <Heading
                                                fontSize='5xl'
                                            >
                                                Carga suelta
                                            </Heading>
                                            Less Container Load /Break Bulk. Multimodal (<b>OTM, DTA, OTMI, DTAI</b>), en contenedor o carga suelta.
                                        </Text>
                                    </Flex>
                                </CardBody>
                            </Card>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}