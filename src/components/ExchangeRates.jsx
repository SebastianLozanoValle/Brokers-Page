import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExchangeRates = () => {
    const [exchangeData, setExchangeData] = useState(null);
    const endpoint = 'latest';
    const accessKey = '433c699f8318bb1f2dc957dd14666735';

    const getExchangeRates = async () => {
        try {
            const response = await axios.get(`http://api.exchangeratesapi.io/v1/${endpoint}?access_key=${accessKey}`);
            const { rates, base, timestamp } = response.data;
            setExchangeData({ rates, base, timestamp });
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    };

    useEffect(() => {
        getExchangeRates();
    }, []);

    if (!exchangeData) {
        return <div>Loading...</div>;
    }

    const { rates, base, timestamp } = exchangeData;

    return (
        <div>
            <h2>Exchange Rates</h2>
            <p>Base Currency: {base}</p>
            <p>Timestamp: {timestamp}</p>
            <h3>Rates:</h3>
            <ul>
                {Object.entries(rates).map(([currency, rate]) => (
                    <li key={currency}>{`${currency}: ${rate}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExchangeRates;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ExchangeRates = () => {
//     const [exchangeRates, setExchangeRates] = useState({});
//     const serverURL = 'http://localhost:3001/exchange-rates';  // URL de tu servidor intermedio

//     useEffect(() => {
//         const fetchExchangeRates = async () => {
//             try {
//                 const response = await axios.get(serverURL);
//                 setExchangeRates(response.data.rates);
//             } catch (error) {
//                 console.error('Error al obtener tasas de cambio:', error);
//             }
//         };

//         fetchExchangeRates();
//     }, []);

//     return (
//         <div>
//             <h2>Tasas de cambio actuales:</h2>
//             <ul>
//                 {Object.entries(exchangeRates).map(([currency, rate]) => (
//                     <li key={currency}>{`${currency}: ${rate}`}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ExchangeRates;


