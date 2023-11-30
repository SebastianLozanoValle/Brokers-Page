import { Box, Button, Center, Container, FormControl, FormLabel, Input, Textarea, Checkbox, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { ContactoMobile } from "../mobile/ContactoMobile";
import { Link as RouterLink } from "react-router-dom";
import { ContactoDesktop } from "../desktop/ContactoDesktop";

export const Contacto = ({ isMobile }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telefono: '',
        message: '',
        aceptoTerminos: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        // Manejar el cambio dependiendo del tipo de elemento
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const map = (
        <Box
            border='solid 4px #BF292E'
            borderRadius='10px 0 10px 0'
            width='100%'
            height='100%'
        >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5330555775936!2d-74.13396223037105!3d4.676993431497286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c99301b47a1%3A0x607b21963daac677!2sMC%20SHIPBROKERS!5e0!3m2!1ses-419!2sco!4v1700496798651!5m2!1ses-419!2sco" width='100%' height='100%' style={{ borderRadius: '10px 0 10px 0' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
    )

    const form = (
        <Box className="servi" py={20}>
            <Box>
                <Container>
                    <form
                        id="miFormulario"
                        action="https://formspree.io/f/xknlejyl"
                        method="POST"
                    >
                        <FormControl mb={4}>
                            <FormLabel htmlFor="name">Nombre</FormLabel>
                            <Input
                                border='solid 4px'
                                borderRadius={20}
                                padding={5}
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Tu Nombre"
                                borderColor='brand.primary'
                                required
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel htmlFor="email">Correo</FormLabel>
                            <Input
                                border='solid 4px'
                                borderRadius={20}
                                padding={5}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Tu Correo"
                                borderColor='brand.primary'
                                required
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel htmlFor="telefono">Telefono</FormLabel>
                            <Input
                                border='solid 4px'
                                borderRadius={20}
                                padding={5}
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="Tu Telefono"
                                borderColor='brand.primary'
                                required
                            />
                        </FormControl>
                        {/* <FormControl mb={4}>
                            <FormLabel htmlFor="message">Mensaje</FormLabel>
                            <Textarea
                                border='solid 4px'
                                borderRadius={20}
                                padding={5}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tu Mensaje: deja una breve descripción de lo que quieres cotizar o cuál de nuestros servicios te interesa."
                                resize="vertical"
                                borderColor='brand.primary'
                                required
                            />
                        </FormControl> */}
                        <FormControl mb={4}>
                            <Checkbox
                                name="aceptoTerminos"
                                isChecked={formData.aceptoTerminos}
                                onChange={handleChange}
                                // colorScheme="brand.primary"
                                borderColor='brand.primary'
                                required
                            >
                                Acepto los <Link color='brand.primary' as={RouterLink} to="/">términos y condiciones</Link>
                            </Checkbox>
                        </FormControl>
                        <Center width='100%'>
                            <Button
                                type="submit"
                                transition='.5s'
                                borderRadius='25px'
                                px={10}
                                m={10}
                                color='#fff'
                                bg='brand.primary'
                                _hover={{
                                    color: 'brand.primary',
                                    bg: '#fff',
                                    boxShadow: 'lg',
                                    transform: 'scale(1.2)'
                                }}
                            >
                                Enviar
                            </Button>
                        </Center>
                    </form>
                </Container>
            </Box>
        </Box>
    );

    return (
        <>
            {isMobile ? <ContactoMobile form={form} map={map} /> : <ContactoDesktop form={form} map={map} />}
        </>
    );
};


