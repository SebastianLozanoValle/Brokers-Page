import { Box, Link as ChakraLink } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const IconoInicio = ({ to, child1, child2 }) => {
    return (
        <Box flex={{ base: 2, md: 2, lg: 1 }} p={4} transition='.5s'
            _hover={{
                transform: 'scale(1.5)',
            }}
        >
            <ChakraLink as={Link} to={to} display="flex" alignItems="center" flexDirection='column' fontSize='xl' fontWeight='bold'>
                <Box fontSize='80px'>{child1}</Box>
                {child2}
            </ChakraLink>
        </Box>
    )
}