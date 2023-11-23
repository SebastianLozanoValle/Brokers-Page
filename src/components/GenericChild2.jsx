import { Box, Heading, Text } from "@chakra-ui/react"

export const GenericChild2 = ({ titulo, child }) => {
    return (
        <Box
            p={0}
        >
            <Heading
                fontSize={{ base: "3xl", md: "3xl", lg: "3xl" }}
            >
                {titulo}
            </Heading>
            <Text>
                {child}
            </Text>
        </Box>
    )
}