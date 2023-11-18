export const Card = ( { fotoPerfil, nombreCompleto, cargoAdministrativo, dato1, dato2, dato3, dato4, qr } ) => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <img src={fotoPerfil} className="card-img-top" alt="Imagen de Perfil"/>
                            <div className="card-body">
                                <h5 className="card-title">{nombreCompleto}</h5>
                                <p className="card-text">{cargoAdministrativo}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><p className="text-dark">Correo: </p>{dato1}</li>
                                    <li className="list-group-item"><p className="text-dark">Telefono: </p>{dato2}</li>
                                    <li className="list-group-item"><p className="text-dark">Celular: </p>{dato3}</li>
                                    <li className="list-group-item"><p className="text-dark">Ciudad: </p>{dato4}</li>
                                </ul>
                                <div className="text-center mt-3">
                                    <img src={qr} alt="Código QR"/>
                                </div>
                                <a href="enlace-de-redireccion" className="btn btn-principal btn-block mt-3">Redireccionar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Card.defaultProps = {
    fotoPerfil: 'https://www.w3schools.com/howto/img_avatar.png',
    nombreCompleto: 'Manuel Perez',
    cargoAdministrativo: 'Administrador',
    dato1: 'XXXXXXXXXXXXXXX',
    dato2: 'XXXXXXXXXXXXXXX',
    dato3: 'XXXXXXXXXXXXXXX',
    dato4: 'XXXXXXXXXXXXXXX',
    qr: ''
}