import { Box, Button, Center, Container, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import banner from '../assets/img/buque.jpeg'
import { useState } from "react"
import { FormInput } from "../components/FormInput"



export const Contacto = () => {
    const [value, setValue] = useState('')
    const handleChange = (event) => setValue(event.target.value)

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
            <Box className="servi">
                <Box>
                    <Container>
                        <FormInput value={value} handleChange={handleChange} child1={'Nombre'} />
                        <FormInput value={value} handleChange={handleChange} child1={'Correo'} />
                        <FormInput value={value} handleChange={handleChange} child1={'Telefono'} />
                    </Container>
                    <Center>
                        <Button
                            transition='.5s'
                            borderRadius='25px'
                            px={10}
                            m={10}
                            color='#fff'
                            bg='brand.primary'
                            _hover={{
                                color: 'brand.primary',
                                bg: '#fff',
                                boxShadow: 'lg',
                                transform: 'scale(1.2)'
                            }}
                        >Enviar</Button>
                    </Center>
                </Box>
            </Box>
            <Box className="text2">
                <Container
                    maxW='70%'
                    textAlign='center'
                    pb={10}
                >

                    <Heading fontSize='xl' pb={10}>nuestra oficinas  en la sede bogota</Heading>
                    <Box
                        border='solid 4px #BF292E'
                        borderRadius='10px 0 10px 0'
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5330555775936!2d-74.13396223037105!3d4.676993431497286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c99301b47a1%3A0x607b21963daac677!2sMC%20SHIPBROKERS!5e0!3m2!1ses-419!2sco!4v1700496798651!5m2!1ses-419!2sco" width='100%' style={{borderRadius:'10px 0 10px 0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </Container>

                
            </Box>
        </>
    )
}