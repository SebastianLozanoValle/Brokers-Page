import { v4 as uuidv4 } from 'uuid';

export const ContenedorTarjetas = ({ tarjetas }) => {
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {tarjetas.map(tarjeta => (
                    <div className="col" key={uuidv4()}>
                        <div className="card">
                            {tarjeta.component(tarjeta.props)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
