import { Navigate, Route, Routes } from "react-router-dom"

export const BrokersRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<>Inicio</>} />
            <Route path="/nosotros" element={<>nosotros</>} />
            <Route path="/servicios" element={<>servicios</>} />
            <Route path="/boletin" element={<>boletin</>} />
            <Route path="/contacto" element={<>contacto</>} />
            {/* Ruta comodín para cualquier ruta no coincidente */}
            <Route path="/*" element={<Navigate to="/404" />} />
            
            {/* Página 404 */}
            <Route path="/404" element={<>Página no encontrada (404)</>} />
        </Routes>
    )
}