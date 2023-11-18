import { Navegacion } from "../components/Navegacion";
import { PiedDePagina } from "../components/PieDePagina";
import { Slider } from "../components/Slider";

export const Unete = () => {
    return (
        <>
            <Navegacion />
            <div className="my container mt-5">
            <hr className='featurette-divider'/>
                <Slider />

                <h2 className="mt-5">Documentos para Descargar</h2>
                <ul>
                    <li>
                    <a href="documento1.pdf" rel="nofollow noopener noreferrer" download>Descargar Documento 1</a>
                    </li>
                    <li>
                    <a href="documento2.pdf" rel="nofollow noopener noreferrer" download>Descargar Documento 2</a>
                    </li>
                    <li>
                    <a href="documento3.pdf" rel="nofollow noopener noreferrer" download>Descargar Documento 3</a>
                    </li>
                </ul>
            </div>
            <hr className='featurette-divider'/>
            <PiedDePagina />
        </>
    );
}