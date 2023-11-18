import { RiWhatsappLine } from 'react-icons/ri';
import { Media } from './Media';
import logo from '../assets/logo.png';

export const PiedDePagina = () => {
    return (
        <>
            <footer className="bg-oscuro text-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img className='logo-footer' src={logo} />
                            <p>Tel. (57) 3138461114</p>
                            <p>Correo: info@mcshipbrokersllc.com</p>
                            <a href="documento3.pdf" download>Terminos y condiciones</a>
                        </div>
                        <div className="col-md-4 justificado">
                            <div className='justificado-contenido'>
                                <Media />
                            </div>
                        </div>
                        <div className="col-md-4 text-md-end d-flex flex-column justify-content-center">
                            <p>NetWord &copy; all rights reserved.</p>
                            <p>networdcol@gmail.com</p>
                        </div>
                    </div>
                </div>
            </footer>
            <a target='_blank' href="http://wa.me/573138461114" rel="nofollow noopener noreferrer" className='flotante ezquina'><RiWhatsappLine className='ezquina' /></a>
        </>
    )

}