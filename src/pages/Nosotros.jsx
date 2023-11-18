import { Navegacion } from "../components/Navegacion";
import { PiedDePagina } from "../components/PieDePagina";
import { ValoresEmpresa } from "../components/ValoresEmpresa";

export const Nosotros = () => {
    return (
        <>
            <Navegacion />
            
            <hr className='featurette-divider'/>
            <div className="bg-nosotros">
                <div className="my">
                    <ValoresEmpresa titulo={'Misión'} descripcion={'Tener un ambiente laboral acorde, ser los mejores mentores y atender a nuestros clientes de la mejor manera posible.'} />
                    <hr className='featurette-divider'/>
                    <ValoresEmpresa titulo={'Visión'} descripcion={'Posicionarnos en el 2030 como una de las mejores empresas de logística a nivel latinoamericano y para 2040 como la mejor a nivel internacional.'} />
                    <hr className='featurette-divider'/>
                    <ValoresEmpresa titulo={'Política de calida'} descripcion={'Posicionarnos en el 2030 como una de las mejores empresas de logistica al nivel latinoamericano y para 2040 como la mejor a nivel internacional.'} />
                </div>
                <hr className='featurette-divider'/>
                <PiedDePagina />
            </div>
        </>
    );
}