import { Box, Container, Heading, Text } from "@chakra-ui/react"
import mar from '../assets/img/mar.jpg'
import logoacre from '../assets/img/logoacre.png'
import logoacre1 from '../assets/img/logoacre1.png'
import logoacre2 from '../assets/img/logoacre2.png'
import logoacre3 from '../assets/img/logoacre3.png'
import logoacre4 from '../assets/img/logoacre4.png'

export const NosotrosMobile = () => {
    return (
        <>
            <Box
                width='100%'
                height='700px'
                display='flex'
                flexWrap='wrap'
                justifyContent='center'
                alignItems='center'

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
                    alignItems='center'

                >
                    <Container
                        height='500px'
                        width='50%'
                        marginTop='20px'

                    >

                        <Box fontSize='18px'
                            marginLeft='10px'
                            color='red'
                            marginBottom='60px'
                            marginTop='20px'
                            display='flex'
                            transition='transform 0.3s'
                            _hover={{ transform: 'translate(5px, -10px)' }}
                        >
                            01
                            <Text color='black'
                                fontSize='14px'
                                marginLeft='15px'
                                display='flex'
                                alignItems='center'
                                transition='transform 0.3s'
                                _hover={{ transform: 'translate(5px, -5px)' }}
                            >
                                Cartagena
                            </Text>
                        </Box>



                        <Box fontSize='18px'
                            marginLeft='10px'
                            color='red'
                            marginBottom='60px'
                            marginTop='20px'
                            display='flex'
                            transition='transform 0.3s'
                            _hover={{ transform: 'translate(5px, -10px)' }}
                        >
                            02
                            <Text color='black'
                                fontSize='14px'
                                marginLeft='15px'
                                display='flex'
                                alignItems='center'
                                transition='transform 0.3s'
                                _hover={{ transform: 'translate(5px, -5px)' }}
                            >
                                Barranquilla
                            </Text>
                        </Box>


                        <Box fontSize='18px'
                            marginLeft='10px'
                            color='red'
                            marginBottom='60px'
                            marginTop='20px'
                            display='flex'
                            transition='transform 0.3s'
                            _hover={{ transform: 'translate(5px, -10px)' }}
                        >
                            03
                            <Text color='black'
                                fontSize='14px'
                                marginLeft='15px'
                                display='flex'
                                alignItems='center'
                                transition='transform 0.3s'
                                _hover={{ transform: 'translate(5px, -5px)' }}
                            >
                                Buenaventura
                            </Text>
                        </Box>

                        <Box fontSize='18px'
                            marginLeft='10px'
                            color='red'
                            marginBottom='60px'
                            marginTop='20px'
                            display='flex'
                            transition='transform 0.3s'
                            _hover={{ transform: 'translate(5px, -10px)' }}
                        >
                            04
                            <Text color='black'
                                fontSize='14px'
                                marginLeft='15px'
                                display='flex'
                                alignItems='center'
                                transition='transform 0.3s'
                                _hover={{ transform: 'translate(5px, -5px)' }}
                            >
                                Tumaco
                            </Text>
                        </Box>
                    </Container>

                    <Container borderLeft='3px solid red'
                        height='500px'
                        marginTop='20px'
                        width='50%'
                    >

                        <Box fontSize='18px'
                            marginLeft='10px'
                            color='red'
                            marginBottom='60px'
                            marginTop='45px'
                            display='flex'
                            transition='transform 0.3s'
                            _hover={{ transform: 'translate(5px, -10px)' }}
                        >
                            05
                            <Text color='black'
                                fontSize='14px'
                                marginLeft='15px'
                                display='flex'
                                alignItems='center'
                                transition='transform 0.3s'
                                _hover={{ transform: 'translate(5px, -5px)' }}
                            >
                                San andres
                            </Text>
                        </Box>



                        <Box fontSize='18px'
                            marginLeft='10px'
                            color='red'
                            marginBottom='60px'
                            marginTop='20px'
                            display='flex'
                            transition='transform 0.3s'
                            _hover={{ transform: 'translate(5px, -10px)' }}
                        >
                            06
                            <Text color='black'
                                fontSize='14px'
                                marginLeft='15px'
                                display='flex'
                                alignItems='center'
                                transition='transform 0.3s'
                                _hover={{ transform: 'translate(5px, -5px)' }}
                            >
                                Uraba
                            </Text>
                        </Box>


                        <Box fontSize='18px'
                            marginLeft='10px'
                            color='red'
                            marginBottom='60px'
                            marginTop='20px'
                            display='flex'
                            transition='transform 0.3s'
                            _hover={{ transform: 'translate(5px, -10px)' }}
                        >
                            07
                            <Text color='black'
                                fontSize='14px'
                                marginLeft='15px'
                                display='flex'
                                alignItems='center'
                                transition='transform 0.3s'
                                _hover={{ transform: 'translate(5px, -5px)' }}
                            >
                                Santamarta
                            </Text>
                        </Box>

                        <Box fontSize='18px'
                            marginLeft='10px'
                            color='red'
                            marginBottom='60px'
                            marginTop='20px'
                            display='flex'
                            transition='transform 0.3s'
                            _hover={{ transform: 'translate(5px, -10px)' }}
                        >
                            08
                            <Text color='black'
                                fontSize='14px'
                                marginLeft='15px'
                                display='flex'
                                alignItems='center'
                                transition='transform 0.3s'
                                _hover={{ transform: 'translate(5px, -5px)' }}
                            >
                                Rioacha
                            </Text>
                        </Box>
                    </Container>
                </Container>



            </Box>
            <Box
                height='300px'
                bg={`url(${ mar })`}
                backgroundSize='cover'
                backgroundPosition='center'
                // backgroundAttachment='fixed'

            >

            </Box>

            <Box height='350px'
                display='flex'
                marginTop='10px'
                justifyContent='center'
                flexWrap='wrap'
            >
                <Container
                    bg={`url(${ logoacre })`}
                    backgroundRepeat='no-repeat'
                    backgroundPosition='center'
                >
                </Container>

                <Container
                    bg={`url(${ logoacre1 })`}
                    backgroundRepeat='no-repeat'
                    backgroundPosition='center'
                >
                </Container>

                <Container
                    bg={`url(${ logoacre2 })`}
                    backgroundRepeat='no-repeat'
                    backgroundPosition='center'
                >
                </Container>

                <Container
                    bg={`url(${ logoacre3 })`}
                    backgroundRepeat='no-repeat'
                    backgroundPosition='center'
                >
                </Container>

                <Container
                    bg={`url(${ logoacre4 })`}
                    backgroundRepeat='no-repeat'
                    backgroundPosition='center'
                >
                </Container>
            </Box>
        </>
    )
}