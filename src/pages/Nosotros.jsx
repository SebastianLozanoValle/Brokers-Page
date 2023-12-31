import { NosotrosDesktop } from "../desktop/NosotrosDesktop"
import imagen from '../assets/img/componente-avion-carga.jpg'
import { Box, Center, Container, Heading, Img, Text, } from "@chakra-ui/react"
import nosotros from '../assets/img/logonosotros.png'
import responsabilidad from '../assets/img/responsabilidad.png'
import honestidad from '../assets/img/honestidad.png'
import mar1 from '../assets/img/mar1.jpg'
import logoacre from '../assets/img/logoacre.png'
import logoacre1 from '../assets/img/logoacre1.png'
import logoacre2 from '../assets/img/logoacre2.png'
import logoacre3 from '../assets/img/logoacre3.png'
import logoacre4 from '../assets/img/logoacre4.png'
import { Sedes } from '../components/Sedes'
import { NosotrosMobile } from "../mobile/NosotrosMobile"

export const Nosotros = ({isMobile}) => {
    return (
        <>
            <Box
                bg={`url(${imagen})`}
                backgroundSize='cover'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                filter="grayscale(25%)"
                position='relative'

            >
                <Box position='absolute' top='0' right='0' bottom='0' left='0' bg='rgba(0, 0, 0, 0.5)'></Box>
          
                <Container
                maxW="90%"
                py={20}
                // mb={300}
                position='relative'
                >
                <Heading
                    fontSize='5xl'
                    color='#fff'
                    borderBottom='solid'
                    display='flex'
                    width='300px'
                    textAlign='left'
                    mb={10}
                    position='relative'
                >
                    Nosotros
                </Heading>

                <Text
                    color='#fff'
                    fontSize={{base: '17px', md: '14px', lg: '18px'}}
                    textAlign='justify'
                    
                >
                    MC SHIPBROKERS SAS, inicia operaciones en la ciudad de Bogotá el 6 de junio
                    del año 2012, nace en Colombia como un integrador de servicios logísticos
                    internacionales, gestionando soluciones generales de la cadena logística
                    internacionales para empresas importadoras y exportadoras.

                    En sus primeros nueve años de actividad, actúa bajo la actividad de
                    tercerización de la cadena logística,  a través de proveedores
                    habilitados del sector, bajo la figura de reventa, así logramos captar
                    una pequeña cuota de clientes de diferentes sectores.

                    Para el Año 2022 MC SHIPBROKERS, obtiene la habilitación por parte de la Dirección
                    de Impuestos y aduanas  Nacionales- DIAN como Agente de Carga Internacional y
                    al mismo tiempo obtiene la Habilitación por parte de  la dirección marítima
                    regional – Dimar, como empresa nacional de servicio público
                    de transporte marítimo  internacional no operadora de naves, ingresa a la primera
                    red de FCL Forwarders en todo el mundo NORTHSTAR.

                    Para el año 2023, Inicia el proceso de ingreso a la red individual más grande
                    del mundo. Además, WCA Inter Global que cuenta con 5172 oficinas miembro en
                    166 países y 670 ciudades en todo el mundo,  asi mismo inicia su proceso de
                    vinculación ante la asociación internacional de transporte aéreo (IATA),
                    Federación Internacional de Asociaciones de transitarios.
                </Text>
                </Container>
                <Container
                display='flex'
                aling-item='center'
                just-conter='center'
                gap='60px'
                maxW='90%'
                flexWrap='wrap'
                marginBottom='100px'
                position='relative'
                >
                  <Container
                    height='200px'
                    width='400px'
                    bg='#fff'
                    borderRadius='30px'
                    overflow='hidden'
                  >
                    <Heading
                        textAlign='left'
                        margin='15px 10px'
                        fontSize='28px'
                    >
                        Misión
                    </Heading>
                    <Text
                        fontSize='14px'
                        color='black'
                        textAlign='justify'
                        margin='20px 5px'
                    >
                        Gestionar de forma precisa y concreta;  <b>soluciones</b> de transporte internacional
                        de mercancias; entregando alternativas personalizadas para cada una de las necesidades de nuestros clientes.
                    </Text>
                </Container>

                <Container
                    height='200px'
                    width='400px'
                    bg='#fff'
                    borderRadius='30px'
                >
                    <Heading
                        textAlign='left'
                        margin='15px 10px'
                        fontSize='28px'
                    >
                        Visión
                    </Heading>
                    <Text
                        fontSize='14px'
                        color='black'
                        textAlign='justify'
                        margin='20px 5px'
                    >
                        Posicionarnos como la compañia Top en el mercado de trasnpore internacional de mercancia, a nivel internacional.
                    </Text>

                </Container>
                </Container>
                <Box
                width='100%'
                textAlign='center'
                alignItems='center'
                justifyContent='center'
                display='flex'
                position='relative'
                >
                <Heading
                    display='flex'
                    alignItems='center'
                    fontSize='30px'
                    color='white'
                    textAlign='center'
                >
                    Valores corporativos
                </Heading>

                </Box>
                <Center
                display='flex'
                width='100%'
                height='300px'
                // marginTop='100px'
                pos='relative'
                >
                    <Box
                        // width='170px'

                    >
                        <Img src={nosotros} width='150px' height='150px' />
                        <Text
                            textAlign='center'
                            color='white'
                            fontSize='13px'
                        >Profesionalismo</Text>
                    </Box>
                    <Box
                        // width='170px'
                    >
                        <Img src={responsabilidad} width='150px' height='150px' />
                        <Text
                            textAlign='center'
                            color='white'
                            fontSize='13px'
                        >Responsabilidad</Text>
                    </Box>

                    <Box
                        // width='170px'
                    >
                        <Img src={honestidad} width='150px' height='150px' />
                        <Text
                            textAlign='center'
                            color='white'
                            fontSize='13px'
                        >Honestidad</Text>
                    </Box>
                </Center>
                
            </Box>

            {
                isMobile?
                <NosotrosMobile />
                :
                <NosotrosDesktop />
            }
        </>
    )
}