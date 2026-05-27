import mysql, { Connection } from 'mysql2';
import dotenv from 'dotenv';
import connection from '../../config/db.js'

export const getProdutos = (req, res) => {
    try {
        connection.query('select * from produto', (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(201).json({message: 'Lista dos produtos', produto: results})
        })
    }

    catch (error) {
        return res.status(400).json({message: 'Erro ao puxar Lista de produtos'})
    }
}

export const criarProduto = (req, res) => {
    try {
        const {nome, valor, quantidade} = req.body;
        connection.query('Insert into produto(nome, valor, quantidade) values (?, ?, ?)', [nome, valor, quantidade], (error, results) => {
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