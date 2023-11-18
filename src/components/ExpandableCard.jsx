import React, { useState } from 'react';
import { Redireccion } from '../pure/Redireccion';
import { v4 as uuidv4 } from 'uuid';

export const ExpandableCard = ({ title, listItems }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <div className={`card mb-3 ${showMore ? 'custom-card-auto-height' : 'custom-card-height'}`}>
                <div className="card-body">
                    <h5 className="card-title text-principal">{title}</h5>
                    <ul className="list-group">
                        {listItems.map(item => (
                            <li className="list-group-item border-principal" key={uuidv4()}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {listItems.length > 3 && (
                <button className="btn btn-principal" onClick={handleToggleShowMore}>
                    {showMore ? 'Ocultar' : 'Mostrar más'}
                </button>
            )}
            <br/>
            <button className="btn btn-principal" aria-label="diriguir seccion unete"><Redireccion className="link" direccion={'unete'} nombreDireccion={'Únete'} /></button>
        </>
    );
};

ExpandableCard.defaultProps = {
    title: 'Título',
    listItems: [
        'Elemento 1',
        'Elemento 2',
        'Elemento 3',
        'Elemento 4',
        'Elemento 5',
    ]
};
