import express from 'express';
import corts from 'cors';
import mysql from 'mysql2';
import initRoutes from './src/routes/routes.js';
import dotenv from 'dotenv';

const app = express();
const PORT = 8000;

app.use(express.json());
initRoutes(app);
dotenv.config();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
});

app.get('/', (req, res) => {
    res.send('API está rodando');
})