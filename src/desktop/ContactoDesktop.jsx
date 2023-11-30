import { Box, Container, Heading, Text } from "@chakra-ui/react"
import banner from '../assets/img/buque.jpeg'

export const ContactoDesktop = ({ form, map }) => {
    return (
        <>
            <Box
                bg={`url(${banner})`}
                // class="container1"
                color='#fff'
                backgroundSize='cover'
                backgroundPosition='center'
                width='100%'
                height='200px'
                display='flex'
                justifyContent='left'
                alignItems='flex-start'
            >
                <Box
                    // class="container"
                    // height='50%'
                    my='auto'
                >
                    <Heading display='flex' mb='0px' textAlign='center' ml='50px'>Contactenos</Heading>
                    <Box
                        // class="linea"
                        width='500px'
                        borderTop='2px solid #fff'
                        mb='10px'
                        textAlign='center'
                        mr='10px'
                        ml='60px'
                    ></Box>
                    <Text
                        display='block'
                        textAlign='justify'
                        width='700px'
                        ml='60px'
                    >
                        Si necesitas alguno de nuestros servicios o desea realizar algun tipo de cotizacion con gusto lo atenderemos.
                    </Text>
                </Box>
            </Box>
            {form}
            <Container
                // class="text2"
                // ml='40px'
                textAlign='left'
                fontWeight='bold'
                width='80%'
                mb={20}
                height='30vh'
            >
                <Text mb={5}>Encuentra nuestra oficinas en la sede bogota</Text>
                
                {map}
            </Container>
        </>
    )
}