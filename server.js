// server.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3001;

app.use(cors());

// Resto de tu configuración del servidor...

app.get('/exchange-rates', async (req, res) => {
    const accessKey = '7620e46d15244a4b8dbb571e67962280';
    const apiUrl = `https://openexchangerates.org/api/latest/${accessKey}`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener tasas de cambio:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor intermedio en http://localhost:${PORT}`);
});
