import { Box, Card, CardBody, Heading, UnorderedList } from "@chakra-ui/react"
import { ItemList } from "../pure/ItemList"
import { v4 as uuidv4 } from 'uuid';

export const CardList = ({ titulo, lista }) =>
    <Box flex={1} p={8} minh='100%'>
        <Card
            transition='.5s'
            bg='#535252'
            color='#fff'
            height='100%'
            borderRadius={20}
            _hover={{
                transform: 'scale(1.1)',
                bg: 'brand.primary',
            }}
        >
            <CardBody>
                <Heading p={6}>{titulo}</Heading>
                <UnorderedList>
                    {
                        lista?.map(item => {
                            return <ItemList key={uuidv4()} child={item} />
                        })
                    }
                </UnorderedList>
            </CardBody>
        </Card>
    </Box>
