import imagen from '../assets/img/componente-avion-carga.jpg'
import { Box, Container, Heading, Text, } from "@chakra-ui/react"
import nosotros from '../assets/img/logonosotros.png'
import responsabilidad from '../assets/img/responsabilidad.png'
import honestidad from '../assets/img/honestidad.png'
import mar from '../assets/img/mar.jpg'
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
            height='700px'
            display='flex'
            flexWrap='wrap'

         >
            <Container
               padding='30px'
               width='350px'

            >
               <Heading
                  textAlign='center'
                  color='red'
               >
                  Nuestras sedes
               </Heading>
               <Text
                  textAlign='center'
               >
                  <b>surcursales al nivel nacional</b>
               </Text>
            </Container>

            <Container
               justifyContent='center'
               display='flex'
            >
               <Container borderLeft='7px solid #BF292E'
                  height='400px'
                  // width='300px'
                  flex={1}
                  mx={2}
                  marginTop='20px'

               >

                  <Sedes number='01' child='Cartagena' />
                  <Sedes number='02' child='Barranquilla' />
                  <Sedes number='03' child='Buenaventura' />
                  <Sedes number='04' child='Cartagena' />

               </Container>

               <Container borderLeft='7px solid #BF292E'
                  height='500px'
                  pt={12}
                  flex={1}
                  mx={2}
                  marginTop='20px'
               >

                  <Sedes number='05' child='San Andrés' />
                  <Sedes number='06' child='Urabá' />
                  <Sedes number='07' child='Santa Marta' />
                  <Sedes number='08' child='Rioacha' />

               </Container>
            </Container>



         </Box>
         <Box
            height='300px'
            bg={`url(${mar})`}
            backgroundSize='cover'
            backgroundPosition='center'

         >

         </Box>

         <Box height='350px'
            display='flex'
            marginTop='10px'
            justifyContent='center'
         >
            <Container
               bg={`url(${logoacre})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            >
            </Container>

            <Container
               bg={`url(${logoacre1})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            >
            </Container>

            <Container
               bg={`url(${logoacre2})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            >
            </Container>

            <Container
               bg={`url(${logoacre3})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            >
            </Container>

            <Container
               bg={`url(${logoacre4})`}
               backgroundRepeat='no-repeat'
               backgroundPosition='center'
            >
            </Container>
         </Box>
      </>
   )
}