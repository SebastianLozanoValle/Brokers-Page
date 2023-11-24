import { Card, CardBody } from "@chakra-ui/card"
import { Img } from "@chakra-ui/image"
import { Box, Center, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/layout"
import { ImRadioUnchecked } from "react-icons/im"

export const CardTransporte = ({ imagen, titulo = 'hola mundo', child }) => {
    return (
        <Box
            h='600px'
            bg='brand.primary'
            borderRadius={20}
            // mb={20}
        >
            <Center textAlign='center' >
                <Heading
                    pt='12.5px'
                    color='brand.primary'
                    width='100%'
                    bg='#fff'
                    alignSelf='center'
                >
                    {titulo}
                </Heading>
            </Center>
            <Box
            >
                <Img src={imagen} bg='#fff' height='270px' width='100%'></Img>
                <Box
                    color='#fff'
                    bg='brand.primary'
                    height='100%'
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

