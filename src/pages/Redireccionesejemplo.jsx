import { Link as CustomLink } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Redireccionesejemplo = () => {
    return (
        <>
            <CustomLink as={Link} to={'/terminos'}>
                terminos y condiciones
            </CustomLink>

            {/* hola bb , recurda inicia elproyecto en el navegador con 'npm run dev' */}

        </>
    )
}