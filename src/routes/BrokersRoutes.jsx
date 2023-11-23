import { Navigate, Route, Routes } from "react-router-dom"
import { Servicios } from "../pages/Servicios"
import { Inicio } from "../pages/Inicio"
import { Contacto } from "../pages/Contacto"

export const BrokersRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<>nosotros</>} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/boletin" element={<>boletin</>} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Ruta comodín para cualquier ruta no coincidente */}
            <Route path="/*" element={<Navigate to="/404" />} />
            
            {/* Página 404 */}
            <Route path="/404" element={<>Página no encontrada (404)</>} />
        </Routes>
    )
}