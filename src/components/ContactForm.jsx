import React, { useState } from 'react';
import logo from '../assets/logo.png';

function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        asunto: '',
        acepto: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
        ...formData,
        [name]: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del formulario a través de una solicitud AJAX o realizar cualquier acción que necesites.
        console.log(formData);
    };

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className="container">
                <div className="row">
                    {/* Parte Izquierda (en desktop) */}
                    <div className="col-md-6 d-none d-md-block">
                        <img className='imagen-formulario' src={logo} alt="Imagen de la empresa" />
                        <p>Texto de acompañamiento aquí.(o una imagen banner para acompañaer el formulario)</p>
                    </div>
                    {/* Parte Derecha (en desktop) */}
                    <div className="col-md-6">
                        <h2 className='text-principal'>Formulario de Contacto</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Ejemplo: Pedro Gonzales"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefono">Número de Teléfono:</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    placeholder="Ejemplo: 3100000000"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo">Correo Electrónico:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="correo"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    placeholder="Ejemplo: direccion@correo.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje:</label>
                                <textarea
                                    className="form-control"
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    placeholder="Ejemplo: Detalles de su solicitud..."
                                    required
                                    style={{ resize: "none" }}
                                />
                            </div>
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input custom-control-principal"
                                    id="acepto"
                                    name="acepto"
                                    checked={formData.acepto}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="form-check-label" htmlFor="acepto">
                                    Acepto los términos y condiciones
                                </label>
                            </div>
                            <a href="documento3.pdf" className='text-principal' download>Leer terminos y condiciones</a>
                            <br/>
                            <button type="submit" className="btn btn-principal">
                            Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
