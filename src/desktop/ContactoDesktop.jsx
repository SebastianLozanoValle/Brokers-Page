import { Box, Heading, Text } from "@chakra-ui/react"

export const ContactoDesktop = ({ form, map }) => {
    return (
        <>
            <Box class="container1">
                <Box class="container">
                    <Heading>Contactenos</Heading>
                    <Box class="linea"></Box>
                    <Text>Si necesitas alguno de nuestros servicios o desea realizar algun tipo de cotizacion con gusto lo
                        atenderemos</Text>
                </Box>
            </Box>
            <Box class="text2">
                <Text>Encuentra nuestra oficinas en la sede bogota</Text>
            </Box>
            {form}
            <Box class="text2">
                <Text>Encuentra nuestra oficinas en la sede bogota</Text>
            </Box>
            {map}
        </>
    )
}