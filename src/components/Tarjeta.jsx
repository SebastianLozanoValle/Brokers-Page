import { Box, Card, CardBody, Center, Flex, Heading, Text } from "@chakra-ui/react"

export const Tarjeta = ({ margin = 0, boxShadow, child1, fontSizeChild1 = '5xl', colorChild1 = 'inherit', child2, fontWeightChild2 = 'inherit', altura = 'auto', colorHover = 'brand.primary' }) => {
    return (
        <Center
            width='100%'
            height={altura}
        >
            <Card
                transition='.5s'
                margin={margin}
                boxShadow={boxShadow}
                width='100%'
                height={altura}
                borderRadius={20}
                _hover={{
                    color: '#fff',
                    bg: colorHover,
                    transform: altura === 'auto'? 'scale(1.05)' : 'scale(1)',
                }}
            >
                <CardBody>
                    <Flex flexWrap='wrap'>
                        <Text
                            fontWeight='bold'
                            fontSize={fontSizeChild1}
                            flex={0.3}
                            p={{ base: "0", md: "0", lg: "4", xl: 4 }}
                            color={colorChild1}
                        >
                            {child1}
                        </Text>
                        <Box
                            // align='center' alignItems='stretch'
                            alignSelf='center'
                            fontWeight={fontWeightChild2}
                            fontSize={{ base: "lg", md: "lg", lg: "xl" }}
                            flex={1.7}
                            p={{ base: "0", md: "0", lg: "2" }}
                        >
                            {child2}
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </Center>
    )
}