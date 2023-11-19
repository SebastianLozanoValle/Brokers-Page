import { Box, ListItem, Text } from "@chakra-ui/react";
import { ImRadioUnchecked } from "react-icons/im";

export const ItemList = ({ child }) => 
    <ListItem display='flex' alignItems='center' >
        <Box><ImRadioUnchecked /></Box> <Text p={4}>{child}</Text>
    </ListItem>