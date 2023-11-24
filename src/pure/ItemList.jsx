import { Box, ListItem, Text } from "@chakra-ui/react";
import { ImRadioUnchecked } from "react-icons/im";

export const ItemList = ({ child, p = 4 }) => 
    <ListItem display='flex' alignItems='center' >
        <Text><ImRadioUnchecked /></Text> <Box p={p}>{child}</Box>
    </ListItem>