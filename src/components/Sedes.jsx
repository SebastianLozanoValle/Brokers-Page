import { Box, Text } from "@chakra-ui/react";

export const Sedes = ({ number, child }) => {
    return (
        <Box
            pl={2}
            transition='1.5s'
            fontSize='30px'
            marginLeft='10px'
            color='brand.primary'
            marginBottom='60px'
            marginTop='20px'
            display='flex'
            sx={{
                position: 'relative',
                '&::after': {
                    content: '""',
                    display: 'block',
                    width: '60px',
                    height: '60px',
                    background: 'brand.primary',
                    borderRadius: 'full',
                    position: 'absolute',
                    top: '50%',
                    left: '-10%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1',
                },
                '&:hover': {
                    '&::after': {
                        transition: '1.5s',
                        width: '290px',
                        left: '30%',
                    },
                    color: '#fff',
                    '& > .text-hover': {
                        color: '#fff',
                    },
                },
                '@media (max-width: 1250px)': {
                    // Estilos específicos para pantallas con un ancho máximo de 600px
                    '&::after': {
                        left: '-13%',
                    },
                    '&:hover::after': {
                        left: '40%',
                    },
                },
                '@media (min-width: 601px) and (max-width: 900px)': {
                    // Estilos específicos para pantallas con un ancho entre 601px y 900px
                    '&::after': {
                        // left: '40%',
                    },
                },
            }}
        >
            {number}
            <Text
                className='text-hover'
                color='black'
                fontSize='25px'
                marginLeft='15px'
                display='flex'
                alignItems='center'
                transition='transform 0.3s'
                _hover={{ color: '#fff' }}
            >
                {child}
            </Text>
        </Box>
    );
};
