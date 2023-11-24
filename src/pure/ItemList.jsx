import { Box, ListItem, Text } from "@chakra-ui/react";
import { ImRadioUnchecked } from "react-icons/im";

export const ItemList = ({ child }) => 
    <ListItem display='flex' alignItems='center' >
        <Text><ImRadioUnchecked /></Text> <Box p={4}>{child}</Box>
    </ListItem>