export const ValoresEmpresa = ({ titulo, descripcion }) => {
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="d-flex justify-content-start">
                            <h2 className="text-principal">{titulo}</h2>
                            </div>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
        </>
    )
}