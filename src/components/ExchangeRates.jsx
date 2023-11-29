import React, { useEffect, useState } from 'react';
import axios from 'axios';

const source = 'COP';

const CurrencyConverter = () => {
    const [exchangeRates, setExchangeRates] = useState({});
    const [amountCOP, setAmountCOP] = useState(1);
    const [amountSelectedCurrency, setAmountSelectedCurrency] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [lastUpdate, setLastUpdate] = useState(null);

    useEffect(() => {
        // ... Código de useEffect para obtener tasas de cambio ...

    }, []);

    useEffect(() => {
        // Calcular el monto convertido cuando cambia la cantidad o las tasas de cambio
        if (exchangeRates && amountCOP) {
            // Asegúrate de usar el formato correcto cuando accedes a las tasas de cambio
            const converted = amountCOP * exchangeRates[`COP${selectedCurrency}`];
            setAmountSelectedCurrency(converted.toFixed(5));
        }
    }, [exchangeRates, amountCOP, selectedCurrency]);

    const currenciesOptions = ['EUR', 'USD', 'JPY', 'GBP', 'CNY'];

    return (
        <div>
            <h1>Currency Converter</h1>

            {/* Tarjeta para el Peso Colombiano (COP) */}
            <div>
                <h2>Peso Colombiano (COP)</h2>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amountCOP}
                        onChange={(e) => setAmountCOP(e.target.value)}
                    />
                </label>
                <p>
                    {amountCOP} COP is equal to {amountSelectedCurrency} {selectedCurrency}.
                </p>
            </div>

            {/* Tarjeta para otras divisas */}
            <div>
                <h2>Otras divisas</h2>
                <label>
                    Choose Currency:
                    <select onChange={(e) => setSelectedCurrency(e.target.value)} value={selectedCurrency}>
                        {currenciesOptions.map(currency => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>
                <p>
                    {amountSelectedCurrency} {selectedCurrency} is equal to {amountCOP} COP.
                </p>
            </div>

            {/* Mostrar la última actualización */}
            {lastUpdate && (
                <p>Last update: {new Date(lastUpdate).toLocaleString()}</p>
            )}
        </div>
    );
};

export default CurrencyConverter;
