import { Box, ChakraProvider } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"
import theme from "./theme/theme"
import { BrokersRoutes } from "./routes/BrokersRoutes"
import { Footer } from "./components/Footer"

export const BrokersApp = () => {
    return (
        <ChakraProvider theme={theme}>
            <NavBar />
            <Box mt={82}>
                <BrokersRoutes />
            </Box>
            <Footer />
        </ChakraProvider>
    )
}