import { ChakraProvider } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"
import theme from "./theme/theme"
import { BrokersRoutes } from "./routes/BrokersRoutes"

export const BrokersApp = () => {
    return (
        <ChakraProvider theme={theme}>
            <NavBar />
            <BrokersRoutes />
        </ChakraProvider>
    )
}