import { useEffect, useState } from 'react';

function useInViewport(ref) {
    const [inViewport, setInViewport] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            // La función de devolución de llamada se ejecutará cuando el elemento entre o salga del viewport.
            entries.forEach((entry) => {
            setInViewport(entry.isIntersecting);
            });
        },
        { root: null, rootMargin: '0px', threshold: 0.5 } // Puedes ajustar estas opciones según tus necesidades.
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
        };
    }, [ref]);

    return inViewport;
}

export default useInViewport;
