import { Img } from "@chakra-ui/image"
import { Box, Center, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/layout"

export const CardTransporte = ({ imagen, titulo = 'hola mundo', child }) => {
    return (
        <Box
            // h='800px'
            minH='100%'
            bg='brand.primary'
            borderRadius={20}
            // mb={20}
        >
            <Center textAlign='center' >
                <Heading
                    pt='12.5px'
                    px='60px'
                    color='brand.primary'
                    width='100%'
                    bg='#fff'
                    alignSelf='center'
                    borderTopRadius={17}
                >
                    {titulo}
                </Heading>
            </Center>
            <Box
            minH='100%'
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="300px" // Ajusta la altura según tus necesidades
                    bg='#fff'
                >
                    <Img src={imagen} maxW="100%" maxH="100%" />
                </Box>
                {/* <Img src={imagen} bg='#fff' minH='505px' width='100%'></Img> */}
                <Box
                    color='#fff'
                    // bg='brand.primary'
                    minH='400px'
                    borderBottomRadius={20}
                    p='25px'
                    pb='50px'
                >
                <UnorderedList
                >
                    {child}
                </UnorderedList>

                </Box>
            </Box>
        </Box>
    )
}

