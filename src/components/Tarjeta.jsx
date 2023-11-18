import { Box, Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react"
import { ImRadioUnchecked } from "react-icons/im";

export const Tarjeta = ({ margin = 0, boxShadow, height = 'auto', child1, fontSizeChild1 = '5xl', colorChild1 = 'inherit', child2, fontWeightChild2 = 'inherit' }) => {
    return (
        <>
            <Card
                margin={margin}
                boxShadow={boxShadow}
            >
                <CardBody>
                    <Flex flexWrap='wrap' align='center' height={height}>
                        <Text
                            fontWeight='bold'
                            fontSize={fontSizeChild1}
                            flex={0.3}
                            p={2}
                            color={colorChild1}
                        >
                            {child1}
                        </Text>
                        <Box
                            fontWeight={fontWeightChild2}
                            fontSize='3xl'
                            flex={1.7}
                            p={2}
                        >
                            {child2}
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </>
    )
}

const prueba = (
    <Card
        boxShadow='lg'
        margin={4}
    >
        <CardBody>
            <Flex flexWrap='wrap' align='center'>
                <Text
                    fontWeight='bold'
                    fontSize='100px'
                    flex={0.3}
                    p={2}
                    color='brand.primary'
                >
                    <ImRadioUnchecked />
                </Text>
                <Text
                    fontSize='3xl'
                    flex={1.7}
                    p={2}
                >
                    <Heading
                        fontSize='5xl'
                    >
                        Carga suelta
                    </Heading>
                    Less Container Load /Break Bulk. Multimodal (<b>OTM, DTA, OTMI, DTAI</b>), en contenedor o carga suelta.
                </Text>
            </Flex>
        </CardBody>
    </Card>
)