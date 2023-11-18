import { ContenedorTarjetas } from "../components/ContenedorTarjetas";
import { ExpandableCard } from "../components/ExpandableCard";
import { Navegacion } from "../components/Navegacion";
import { PiedDePagina } from "../components/PieDePagina";

export const Servicios = () => {
    const tarjetasConExpandibleCard = [
        {
            component: ExpandableCard,
            props: {
                title: 'TRANSPORTE INTERNACIONAL MARITIMO',
                listItems: [
                    'Coordinación de Operaciones de transporte internacional de carga en importación y exportación vía aérea.',
                    'FCL - Full Container Load /OPEN TOP, FLAT, FLAT RACK, ISO TANQUE,REFFER',
                    'Menajes, Cargas de proyecto, Cargas a granel, cargas liquidas, gaseosas, carga química o DG, carga viva',
                    'Carga suelta: Less Container Load /Break Bulk.',
                    'Multimodal (OTM, DTA, OTMI, DTAI), en contenedor o carga Suelta.',
                ],
            },
        },
        {
            component: ExpandableCard,
            props: {
                title: 'TRANSPORTE INTERNACIONAL AÉREO',
                listItems: [
                    'Coordinación de operaciones de transporte internacional de carga en importación y exportación vía aérea.',
                    'Manejo de carga general.',
                    'Manejo de carga perecedera.',
                    'Manejo carga Viva',
                    'Manejo de carga peligrosas',
                ],
            },
        },
        {
            component: ExpandableCard,
            props: {
                title: 'AGENCIAMIENTO ADUANERO',
                listItems: [
                    'Coordinación de trámites aduaneros.',
                    'Trámites ante las entidades legales pertinentes a la operación.DIAN,VUCE,INVIMA y ICA.',
                    'Asesoría en normatividad aduanera de exportaciones e importaciones;acuerdos comerciales de integración.',
                    'Coordinación operativa y presencia en los principales puertos colombianos como Santa Marta, Barranquilla, Cartagena, Buenaventura, Ipiales',
                ],
            },
        },
        {
            component: ExpandableCard,
            props: {
                title: 'SEGUROS INTERNACIONALES DE MERCANCIAS',
                listItems: [
                    'Contratación de pólizas de carga internacional.',
                    'Contratación de seguros generales de daños, hurto y pérdidas de mercancías por cuenta de terceros',
                ],
            },
        },
        // Agrega más tarjetas con el componente ExpandibleCard y propiedades específicas
    ];

    return (
        <>
            <div className="servicios">
                <Navegacion />
                <div className="my">
                <hr className='featurette-divider'/>
                    <div className="container text-principal">
                        <h2>Nuetros servicios</h2>
                    </div>
                    <ContenedorTarjetas className="" tarjetas={tarjetasConExpandibleCard} />
                </div>
                <PiedDePagina />
            </div>
        </>
    );
}