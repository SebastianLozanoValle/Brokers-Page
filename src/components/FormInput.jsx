import { Box, FormLabel, Input, Text } from "@chakra-ui/react"

export const FormInput = ({ value, handleChange, child1 }) => {
    return (
        <Box
            p={1}
        >
            <FormLabel
            margin={0}
            p={0}
            >{child1}</FormLabel>
            {/* <Text mb='8px'>{child1}</Text> */}
            <Input
                border='4px solid #BF292E'
                borderRadius='20px'
                padding='20px'
                margin={0}
                value={value}
                onChange={handleChange}
                size='sm'
            />
        </Box>
    )
}