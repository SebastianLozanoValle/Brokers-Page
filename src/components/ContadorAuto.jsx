import React, { useRef, useEffect, useState } from 'react';
import useInViewport from '../js/useInViewport';

export const ContadorAuto = ({ objetivo }) => {
    const elementRef = useRef();
    const inViewport = useInViewport(elementRef);
    const [valor, setValor] = useState(0);
    const [haRealizadoLogica, setHaRealizadoLogica] = useState(false);

    useEffect(() => {
        if (inViewport && !haRealizadoLogica) {
            let contador = 0;

            const interval = setInterval(() => {
                if (contador < objetivo) {
                    setValor(contador);
                    contador += 1;
                } else {
                    clearInterval(interval);
                    setHaRealizadoLogica(true); // Marcar que la lógica se ha realizado
                }
            }, 25); // Incrementa cada segundo
        }
    }, [inViewport, objetivo, haRealizadoLogica]);

    return (
        <div ref={elementRef}>
            <h1 className="display-1 text-principal">{valor}%</h1>
        </div>
    );
}
