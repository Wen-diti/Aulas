import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

connection.connect((err) => {
    if (err) {
        console.error('ERRO 500: Erro ao conectar no banco:', err)
        return;
    }

    console.log('Conectado ao MYSQL')
})

export default connection