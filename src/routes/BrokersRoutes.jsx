import { Navigate, Route, Routes } from "react-router-dom"
import { Servicios } from "../pages/Servicios"
import { Inicio } from "../pages/Inicio"
import { Contacto } from "../pages/Contacto"
import ExchangeRates from "../components/ExchangeRates"
import { Nosotros } from "../pages/Nosotros"
import { Redireccionesejemplo } from "../pages/Redireccionesejemplo"

export const BrokersRoutes = ({ isMobile }) =>{
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros isMobile={isMobile}/>} />
            <Route path="/servicios" element={<Servicios isMobile={isMobile} />} />
            <Route path="/boletin" element={<ExchangeRates/>} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos" element={<>terminos y condiciones</>} />
            <Route path="/redirecciones" element={<Redireccionesejemplo/>} />
            {/* Ruta comodín para cualquier ruta no coincidente */}
            <Route path="/*" element={<Navigate to="/404" />} />
            
            {/* Página 404 */}
            <Route path="/404" element={<>Página no encontrada (404)</>} />
        </Routes>
    )
}