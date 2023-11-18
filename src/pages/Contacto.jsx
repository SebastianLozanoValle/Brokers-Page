import ContactForm from "../components/ContactForm";
import { Navegacion } from "../components/Navegacion";
import { PiedDePagina } from "../components/PieDePagina";

export const Contacto = () => {
    return (
        <>
            <Navegacion />
            <div className="my">
            <hr className='featurette-divider'/>
                <ContactForm />
            </div>
            <hr className='featurette-divider'/>
            <PiedDePagina />
        </>
    );
}