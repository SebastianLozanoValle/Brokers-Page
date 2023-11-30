import { Box, Button, Center, Container, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import banner from '../assets/img/buque.jpeg'
import { useState } from "react"
import { FormInput } from "../components/FormInput"



export const ContactoMobile = ({ form, map }) => {

    return (
        <>
            <Box className="container1"
                bg={`url(${banner})`}
                bgSize='cover'
                bgAttachment='local'
                bgPos='center'
                w='100%'
                h='200px'
                display='flex'
                justifyContent='left'
                alignItems='flex-start'
            >
                <Box className="container"
                    bgGradient="linear(to-b, brand.primary, transparent 30%)"
                    width='100%'
                    height='150%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Box>
                        <Center>
                            <Heading
                                color='#fff'
                                fontSize='3xl'
                                textAlign='center'
                            >
                                Contactenos
                            </Heading>
                        </Center>
                        <Center>
                            <Box className="linea"
                                transition='.5s'
                                width='100px'
                                borderTop='2px solid #fff'
                                mb='10px'
                                textAlign='center'
                                _hover={{
                                    transform: 'scale(1.2)',
                                }}
                            ></Box>
                        </Center>
                    </Box>
                    {/* <Text>Si necesitas alguno de nuestros servicios o desea realizar algun tipo de cotizacion con gusto lo atenderemos</Text> */}
                </Box>
            </Box>

            <Box className="text">
                <Text
                    fontSize='xs'
                    textAlign='center'
                    pt='10px'
                    pb='30px'
                    px='40px'

                >Si necesitas alguno de nuestros servicios o desea realizar algun tipo de cotizacion con gusto lo atenderemos</Text>
            </Box>
            {form}
            <Box className="text2">
                <Container
                    maxW='90%'
                    textAlign='center'
                    pb={10}
                >

                    <Heading fontSize='xl' pb={10}>nuestra oficinas  en la sede bogota</Heading>
                    {map}
                </Container>


            </Box>
        </>
    )
}