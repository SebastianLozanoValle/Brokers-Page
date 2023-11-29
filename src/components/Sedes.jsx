import { Box, Text } from "@chakra-ui/react"

export const Sedes = ({ number, child }) => {
    return (
        <Box
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
                width: '40px',
                height: '40px',
                background: 'brand.primary',
                borderRadius: 'full',
                position: 'absolute',
                top: '50%',
                left: '-13%',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1',
            },
            '&:hover': {
                '&::after': {
                transition: '1.5s',
                width: '290px',
                left: '40%',
                },
                color: '#fff',
                // Puedes agregar otros estilos que desees en el hover del Box
                '& > .text-hover': {
                color: '#fff',
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
    )
}