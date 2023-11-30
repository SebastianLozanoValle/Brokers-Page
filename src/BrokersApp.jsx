import { Box, ChakraProvider } from "@chakra-ui/react"
import { NavBar } from "./components/NavBar"
import theme from "./theme/theme"
import { BrokersRoutes } from "./routes/BrokersRoutes"
import { Footer } from "./components/Footer"
import { useEffect, useState } from "react"
import ScrollToTop from "./components/ScrollToTop"

export const BrokersApp = () => {
    const [isMobile, setIsMobile] = useState(true);

    // Función para manejar cambios en el tamaño de la ventana
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    // Agregar un listener para el evento resize al montar el componente
    useEffect(() => {
        // Llamada inicial para establecer el estado correcto
        handleResize();
        window.addEventListener("resize", handleResize);

        // Limpiar el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <ChakraProvider theme={theme}>
            <ScrollToTop />
            <NavBar isMobile={isMobile}/>
            <Box mt={82}>
                <BrokersRoutes isMobile={isMobile} />
            </Box>
            <Footer />
        </ChakraProvider>
    )
}