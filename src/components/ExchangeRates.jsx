import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Center, Container, Flex, Heading, Input, MenuItemOption, Select, TagLabel, Text } from '@chakra-ui/react';

// const source = 'COP';

// Constantes temporales
const source = 'COP';
const exchangeRates2 = {
    "COPEUR": 0.000229,
    "COPUSD": 0.000251,
    "COPJPY": 0.03708,
    "COPGBP": 0.000198,
    "COPCNY": 0.001782
};

const timestamp2 = 1701276063

const CurrencyConverter = () => {
    const [exchangeRates, setExchangeRates] = useState({});
    const [amountCOP, setAmountCOP] = useState(1);
    const [amountSelectedCurrency, setAmountSelectedCurrency] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [amountUSD, setAmountUSD] = useState(0);
    const [amountSelectedCurrencyUSD, setAmountSelectedCurrencyUSD] = useState(0);
    const [lastUpdate, setLastUpdate] = useState(null);

    //
    useEffect(() => {
        setExchangeRates(exchangeRates2)
        // setLastUpdate(timestamp2)
    }, [])
    //

    // useEffect(() => {
    //     // Verificar si es la primera vez que se abre la página
    //     const isFirstTime = localStorage.getItem('isFirstTime') === null;

    //     // Si es la primera vez o han pasado más de 24 horas desde la última actualización, realizar la solicitud a la API
    //     const lastUpdateTimestamp = localStorage.getItem('lastUpdate');
    //     const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;

    //     if (isFirstTime || !lastUpdateTimestamp || Date.now() - Number(lastUpdateTimestamp) > twentyFourHoursInMilliseconds) {
    //         const accessKey = '063823e4f7700fff0c4df92e4b774711';
    //         const currencies = 'EUR,USD,JPY,GBP,CNY';
    //         const format = '1';

    //         axios.get(`http://apilayer.net/api/live?access_key=${accessKey}&currencies=${currencies}&source=${source}&format=${format}`)
    //             .then(response => {
    //                 // Log de la respuesta de la API
    //                 console.log('Response from API:', response.data);

    //                 // Almacenar los datos de la respuesta en el estado
    //                 setExchangeRates(response.data.quotes);

    //                 // Almacenar los datos de la respuesta en el localStorage
    //                 localStorage.setItem('exchangeRates', JSON.stringify(response.data.quotes));

    //                 // Actualizar el timestamp en localStorage
    //                 const currentTimestamp = Date.now();
    //                 localStorage.setItem('lastUpdate', currentTimestamp);
    //                 setLastUpdate(currentTimestamp);

    //                 // Marcar que ya se ha realizado la solicitud
    //                 localStorage.setItem('isFirstTime', 'false');
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching exchange rates:', error);
    //             });
    //     } else {
    //         // Si no es la primera vez y no ha pasado más de 24 horas, obtener los datos del localStorage
    //         const storedExchangeRates = localStorage.getItem('exchangeRates');
    //         if (storedExchangeRates) {
    //             setExchangeRates(JSON.parse(storedExchangeRates));
    //         }

    //         setLastUpdate(Number(lastUpdateTimestamp));
    //     }
    // }, []);

    useEffect(() => {
        // Calcular el monto convertido cuando cambia la cantidad o las tasas de cambio
        if (exchangeRates && amountCOP) {
            // Asegúrate de usar el formato correcto cuando accedes a las tasas de cambio
            const converted = amountCOP * exchangeRates[`COP${selectedCurrency}`];
            setAmountSelectedCurrency(converted.toFixed(2));
        }
    }, [exchangeRates, amountCOP, selectedCurrency]);

    useEffect(() => {
        // Calcular el monto convertido en la otra dirección
        if (exchangeRates && amountUSD) {
            // Asegúrate de usar el formato correcto cuando accedes a las tasas de cambio
            const converted = amountUSD / exchangeRates[`COP${selectedCurrency}`];
            setAmountSelectedCurrencyUSD(converted.toFixed(2));
        }
    }, [exchangeRates, amountUSD, selectedCurrency]);

    const currenciesOptions = ['EUR', 'USD', 'JPY', 'GBP', 'CNY'];

    const handleAmountCOPChange = (newAmountCOP) => {
        setAmountCOP(newAmountCOP);

        // Calcular el monto convertido en la otra dirección
        const convertedUSD = newAmountCOP * exchangeRates[`COP${selectedCurrency}`];
        setAmountUSD(convertedUSD.toFixed(2));

        // Actualizar el monto en USD automáticamente
        const converted = newAmountCOP * exchangeRates[`COP${selectedCurrency}`];
        setAmountSelectedCurrency(converted.toFixed(2));
    };

    const handleAmountUSDChange = (newAmountUSD) => {
        setAmountUSD(newAmountUSD);

        // Calcular el monto convertido en la otra dirección
        const convertedCOP = newAmountUSD / exchangeRates[`COP${selectedCurrency}`];
        setAmountCOP(convertedCOP.toFixed(2));

        // Actualizar el monto en COP automáticamente
        const converted = newAmountUSD / exchangeRates[`COP${selectedCurrency}`];
        setAmountSelectedCurrencyUSD(converted.toFixed(2));
    };

    return (
        <Box my={40}>
            <Center>
                <Container minW='100%'>
                    <Center>
                        <Heading m={5}>Boletín Informativo</Heading>
                    </Center>

                    <Container display='flex' flexWrap='wrap' minW='90vw' minH='auto'>
                        {/* Tarjeta para el Peso Colombiano (COP) */}
                        <Center ml='auto' mr={{ base: "auto", md: "auto", lg: 5 }} my={5} minH='100%' >
                            <Box flex={1} p={10} boxShadow='2xl' my={5} borderRadius={20} width='100%' height='100%'
                                _hover={{
                                    transform: 'scale(1.2)',
                                    bg: 'brand.primary',
                                    color: '#fff'
                                }}
                                transition='.5s'
                            >
                                <Heading>Peso Colombiano (COP)</Heading>
                                <Box>
                                    <Box>
                                        <Text
                                            py={4}
                                        >
                                            Monto:
                                        </Text>
                                        <Input
                                            mb={4}
                                            type="number"
                                            value={amountCOP}
                                            onChange={(e) => handleAmountCOPChange(e.target.value)}
                                        />
                                    </Box>
                                </Box>
                                <Text color='brand.background'>
                                    {amountCOP} COP equivale a {amountSelectedCurrency} {selectedCurrency}.
                                </Text>
                            </Box>
                        </Center>

                        {/* Tarjeta para otras Boxisas */}
                        <Center mr='auto' ml={{ base: "auto", md: "auto", lg: 5 }} my={5} minH='100%' >
                            <Box flex={1} p={10} boxShadow='2xl' my={5} borderRadius={20} width='100%' height='100%'
                                _hover={{
                                    transform: 'scale(1.2)',
                                    bg: '#c9c9c9',
                                    color: 'brand.primary'
                                }}
                                transition='.5s'
                            >
                                {/* <h2>Otras Divisas</h2> */}
                                <label>
                                    <Heading pb={4}>Elija La Divisa:</Heading>
                                    <Select onChange={(e) => setSelectedCurrency(e.target.value)} value={selectedCurrency}>
                                        {currenciesOptions.map(currency => (
                                            <option key={currency} value={currency}>
                                                {currency}
                                            </option>
                                        ))}
                                    </Select>
                                </label>
                                <Box>
                                    <label>
                                        <Text
                                            py={4}
                                        >
                                            Monto:
                                        </Text>
                                        <Input
                                            type="number"
                                            value={amountUSD}
                                            onChange={(e) => handleAmountUSDChange(e.target.value)}
                                        />
                                    </label>
                                </Box>
                                {/* <Text>
                                    {amountUSD} {selectedCurrency} equivale a {amountSelectedCurrencyUSD} COP.
                                </Text> */}
                            </Box>
                        </Center>
                    </Container>

                    {/* Mostrar la última actualización */}
                    {lastUpdate && (
                        <Center><Text>Ultima actualizacion: {new Date(lastUpdate).toLocaleString()}</Text></Center>
                    )}
                </Container>
            </Center>
        </Box>
    );
};

export default CurrencyConverter;