import { Box, Heading, Text } from "@chakra-ui/react"

export const GenericChild2 = ({ titulo, child }) => {
    return (
        <Box
            p={4}
        >
            <Heading
                fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            >
                {titulo}
            </Heading>
            <Text>
                {child}
            </Text>
        </Box>
    )
}