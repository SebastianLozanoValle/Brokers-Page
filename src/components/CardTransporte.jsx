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
                <Img src={imagen} bg='#fff' height='220px' width='100%'></Img>
                <Box
                    color='#fff'
                    bg='brand.primary'
                    minH='400px'
                    borderBottomRadius={20}
                    p='25px'
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

