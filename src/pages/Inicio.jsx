import { Navegacion } from '../components/Navegacion';
import { Redireccion } from '../pure/Redireccion';
import { PiedDePagina } from '../components/PieDePagina';
import { Link } from 'react-router-dom';
import { ContadorAuto } from '../components/ContadorAuto';

export const Inicio = () => {
    return (
        <>
            <Navegacion />
            <section>
                <section className="banner">
                    <div className='container'>
                        <div className='row'>
                            {/* <div className='col-sm-6'></div> */}
                            <div className='col-sm-6'>
                                <h1>M.CShipBrokers</h1>
                                <p className='justify-content-center align-items-center'> Somos una empresa nacional de carácter privado, fundada en <b>Bogotá el 6 de junio de 2012.</b> Habilitados mediante resolución 008525 de 14 de septiembre de 2022 emitida por la Dirección de impuestos y aduanas nacionales DIAN, por la cual se reconoce como agente de carga internacional en el modo Marítimo Código ACI 1339.<br/> habilitación mediante resolución (1111-2022) MD-DIMAR-SUBMERC-ATRAN 26 DE DICIEMBRE DE 2022. - Por la cual nos reconoce como Empresa Nacional de Servicio Público de Transporte Marítimo Internacional No Operadora de Naves. Seccionales Habilitadas: Cartagena, Santa Marta, Barranquilla, Buenaventura, Riohacha, San Andrés, Tumaco y Urabá.
                                </p>
                                <button className="btn btn-principal" aria-label="diriguir seccion contacto"><Redireccion className="link" direccion={'contacto'} nombreDireccion={'Contacto'} /></button>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className='featurette-divider'/>
                <div className='bg-principal w-100 py-5'>
                    <div className='container bg-principal'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className="equipo_empleado">
                                    <svg className='bd-placeholder-img rounded-circle' width="240px" height="240px" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#777">
                                        </rect>
                                    </svg>
                                    <h2 className='text-white'>Gerente</h2>
                                    <p><span className="text-dark">Nombre: </span>Manuel Cardenas Forero</p>
                                    <p><span className="text-dark">Correo: </span>info@mcshipbrokersllc.com</p>
                                    <p><span className="text-dark">Telefono: </span>(57) 3138461114</p>
                                </div>
                            </div>
                            <div className='col-md-8'>
                                <div className="equipo">
                                    <div className='equipo__contenido'>
                                        <h2>Equipo</h2>
                                        <p>
                                            Contaras con un grupo especializado para el cargo que te otorgará la mejor experiencia durante tu proceso,aquí podrás conocer más sobre las personas que trabajarán contigo.
                                        </p>
                                        <button className="btn btn-principal bg-white" aria-label="diriguir seccion de Nosotros"><Link to="nosotros/equipo/" className="text-principal">Equipo</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='featurette-divider'/>
                <section className='seccion'>
                    <div className='container'>
                    <h2 className='text-principal'>Status</h2>
                    <p><b>M.CShipbrokers S.A.S</b> estamos carcaterizados por ser los mejores en nuestro campo, para así poder ofrecerte la mejor expriencia posible.</p>
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="row">
                        <div className="col-sm-6 mb-3">
                            <div className="card text-center h-100"> {/* Agregamos 'h-100' para establecer la altura al 100% */}
                            <div className="card-body">
                                <ContadorAuto objetivo={89} />
                                <p className="card-text">Cumplimiento en cargas marítimas.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <div className="card text-center h-100"> {/* Agregamos 'h-100' para establecer la altura al 100% */}
                            <div className="card-body">
                                <ContadorAuto objetivo={91} />
                                <p className="card-text">Nuestros clientes se encuentran satisfechos.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                <hr className='featurette-divider'/>
                
                <PiedDePagina />
            </section>
        </>
    )
}