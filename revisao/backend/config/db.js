import mysql from 'mysql2'

const connection = mysql.createConnection({
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
    PORT: process.env.PORT
});

connection.connect((err) => {
    if (err) {
        console.error('ERRO 500: Erro ao conectar no banco:', err)
        return;
    }

    console.log('Conectado ao MYSQL')
})

export default connection