import imagen from '../assets/img/componente-avion-carga.jpg'
import { Box, Center, Container, Heading, Text } from "@chakra-ui/react"
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


export const NosotrosDesktop = () => {
   return (
      <>
         <Box
            width='100%'
            height='calc(auto+ 700px)'
            display='flex'
            flexWrap='wrap'
            my={20}
         >
            <Center>
               <Container
                  minW='90vw'
                  justifyContent='center'
                  display='flex'
                  flexWrap='wrap'
               >
                  <Box flex={{ base: "1", md: "1", lg: "0.5" }} pr={20}>
                     <Heading
                        textAlign='center'
                        color='brand.primary'
                     >
                        Nuestras sedes
                     </Heading>
                     <Text textAlign='center'>
                        <b>Sucursales a nivel nacional</b>
                     </Text>
                  </Box>
                  <Container
                     borderLeft='7px solid #BF292E'
                     height='400px'
                     flex={{ base: "1", md: "0.5", lg: "0.25" }}
                     mx={2}
                     marginTop='20px'
                     minW='285px'
                     maxW='285px'
                  >
                     <Sedes number='01' child='Cartagena' />
                     <Sedes number='02' child='Barranquilla' />
                     <Sedes number='03' child='Buenaventura' />
                     <Sedes number='04' child='Cartagena' />
                  </Container>

                  <Container
                     borderLeft='7px solid #BF292E'
                     height='500px'
                     pt={12}
                     flex={{ base: "1", md: "0.5", lg: "0.25" }}
                     mx={2}
                     marginTop='20px'
                     minW='285px'
                     maxW='285px'
                  >
                     <Sedes number='05' child='San Andrés' />
                     <Sedes number='06' child='Urabá' />
                     <Sedes number='07' child='Santa Marta' />
                     <Sedes number='08' child='Riohacha' />
                  </Container>
               </Container>
            </Center>
         </Box>

         <Box
            height='300px'
            bg={`url(${mar1})`}
            backgroundSize='cover'
            backgroundPosition='center'
         />

         <Box
            height='350px'
            display='flex'
            marginTop='10px'
            justifyContent='center'
         >
            <Container
               bg={`url(${logoacre})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            />
            <Container
               bg={`url(${logoacre1})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            />
            <Container
               bg={`url(${logoacre2})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            />
            <Container
               bg={`url(${logoacre3})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            />
            <Container
               bg={`url(${logoacre4})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            />
         </Box>
      </>
   )
}
