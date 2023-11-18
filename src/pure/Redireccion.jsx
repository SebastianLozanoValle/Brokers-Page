import { Link } from 'react-router-dom';

export const Redireccion = ({ direccion, nombreDireccion }) => {
    return (
        <Link to={`/${direccion}`} aria-label={`Ir a la página de ${nombreDireccion}`}>{nombreDireccion}</Link>
    );
}