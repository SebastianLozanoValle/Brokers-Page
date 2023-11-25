import maritimo from '../assets/img/seccionmaritimo.png'
import aereo from '../assets/img/seccionaereo.png'
import terrestre from '../assets/img/seccionterrestre.png'
import { ServiciosDesktop } from "../desktop/ServiciosDesktop"
import { ServiciosMobile } from "../mobile/ServiciosMobile";
import banner1 from '../assets/img/banner_servicios.png';

const Lista1 = [
    <>Coordinación de trámites aduaneros.</>,
    <>Trámites ante las entidades legales pertinentes a la operación. <b>DIAN,VUCE, INVIMA e ICA.</b></>,
    <>Asesoría en normatividad aduanera de exportaciones e importaciones; acuerdos comerciales de integración.</>,
    <>Coordinación operativa y presencia en los principales puertos colombianos como <b>Santa Marta, Barranquilla, Cartagena, Buenaventura e Ipiales.</b></>,
]

const Lista2 = [
    <>Contratación de pólizas de carga internacional.</>,
    <>Contratación de seguros generales de daños, hurto y pérdidas de mercancías por cuenta de terceros.</>,
]

export const Servicios = ({ isMobile }) => {
    return (
        <>
            
            {/* adaptacion a mobile +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
            {
                isMobile ?
                    <ServiciosMobile maritimo={maritimo} aereo={aereo} terrestre={terrestre} Lista1={Lista1} Lista2={Lista2} banner1={banner1} />
                    :
                    <ServiciosDesktop maritimo={maritimo} aereo={aereo} terrestre={terrestre} Lista1={Lista1} Lista2={Lista2} banner1={banner1} />
            }

        </>
    )
}