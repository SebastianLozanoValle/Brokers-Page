import { ContenedorTarjetas } from "../components/ContenedorTarjetas";
import { Navegacion } from "../components/Navegacion"
import { PiedDePagina } from "../components/PieDePagina"
import { Card } from "../components/Card";

export const Equipo = () => {
    const tarjetasConCard = [
        {
            component: Card,
            props: {
                fotoPerfil: 'https://www.w3schools.com/howto/img_avatar.png',
                nombreCompleto: 'Usuario 1',
                cargoAdministrativo: 'Cargo 1',
                dato1: 'Dato 1.1',
                dato2: 'Dato 1.2',
                dato3: 'Dato 1.3',
                dato4: 'Dato 1.4',
                qr: 'qr1.png',
            },
        },
        {
            component: Card,
            props: {
                fotoPerfil: 'https://www.w3schools.com/howto/img_avatar.png',
                nombreCompleto: 'Usuario 2',
                cargoAdministrativo: 'Cargo 2',
                dato1: 'Dato 2.1',
                dato2: 'Dato 2.2',
                dato3: 'Dato 2.3',
                dato4: 'Dato 2.4',
                qr: 'qr2.png',
            },
        },
        // Agrega más tarjetas con el componente Card y propiedades específicas
    ];
    return (
        <>
            <div className="my">
                <Navegacion />
                <hr className='featurette-divider' />
                <div className="container text-principal">
                    <h2>Equipo</h2>
                </div>
                <ContenedorTarjetas tarjetas={tarjetasConCard} />
                <hr className='featurette-divider' />
                <PiedDePagina />
            </div>
        </>
    )
}