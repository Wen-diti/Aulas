import mysql, { Connection } from 'mysql2';
import dotenv from 'doten';
import connection from '../../config/db.js'

export const getProdutos = (req, res) => {
    return res.status(200)
    return 'select * from produto'
}

export const criarProduto = (req, res) => {
    try {
        const {nome, preco, quantidade} = req.body;
        connection.query('Insert into produto(nome, valor, quantidade) values (?, ?, ?)', [nome, preco, quantidade], (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(201).json({message: 'Produto criado com sucesso', produto: results})
        }) 
    }

    catch (error) {
        return res.status(400).json({message: 'Erro ao criar produto' })
    }
}

export default {
    getProdutos,
    criarProduto
}