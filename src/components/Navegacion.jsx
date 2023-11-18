import {
    RiMenuFill,
    RiHome2Line,
    RiCustomerService2Fill,
    RiTeamLine, RiMailSendLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Redireccion } from '../pure/Redireccion';
import { Media } from './Media';

export const Navegacion = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="navb-logo">
                        <img src={logo} />
                        </div>
                        <div className="navb-items d-none d-lg-flex">
                        <div className="item">
                            <Redireccion className="link" direccion={''} nombreDireccion={'Inicio'} />
                        </div>
                        <div className="item">
                            <Redireccion className="link" direccion={'nosotros'} nombreDireccion={'Nosotros'} />
                        </div>
                        <div className="item">
                            <Redireccion className="link" direccion={'servicios'} nombreDireccion={'Servicios'} />
                        </div>
                        <div className="item">
                            <Redireccion className="link" direccion={'contacto'} nombreDireccion={'Contacto'} />
                        </div>
                        <div className="item-button">
                            <Link to={'/unete'} className="otro">Documentos</Link>
                        </div>
                    </div>
                </div>
                <div className="mobile-toggler d-lg-none">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#navbmodal">
                        <RiMenuFill className="bars" />
                    </a>
                </div>

                
                <div className="modal fade" id="navbmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <img src={logo} alt="Logo"/>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="modal-line">
                            <button type="button" className="no-style-button" data-bs-dismiss="modal"><RiHome2Line /><Redireccion className="link" direccion={''} nombreDireccion={'Inicio'} /></button>
                        </div>
                        <div className="modal-line">
                            <button type="button" className="no-style-button" data-bs-dismiss="modal"><RiTeamLine /><Redireccion className="link" direccion={'nosotros'} nombreDireccion={'Nosotros'} /></button>
                        </div>
                        <div className="modal-line">
                            <button type="button" className="no-style-button" data-bs-dismiss="modal"><RiCustomerService2Fill /><Redireccion className="link" direccion={'servicios'} nombreDireccion={'Servicios'} /></button>
                        </div>
                        <div className="modal-line">
                            <button type="button" className="no-style-button" data-bs-dismiss="modal"><RiMailSendLine /><Redireccion className="link" direccion={'contacto'} nombreDireccion={'Contacto'} /></button>
                        </div>
                        <button type="button" className="no-style-button navb-button" data-bs-dismiss="modal"><Link to={'/unete'} className='navb-button'>Documentos</Link></button>
                        </div>
                        <div className="mobile-modal-footer">
                            <Media />
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        </>
    )
}