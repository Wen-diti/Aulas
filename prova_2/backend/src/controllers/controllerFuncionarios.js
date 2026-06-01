import mysql, { Connection } from 'mysql2';
import dotenv from 'dotenv';
import connection from '../../config/db.js'

export const listarFuncionarios = (req, res) => {
    try {
        connection.query('select * from funcionarios', (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(201).json({message: 'Lista dos funcionarios', funcionarios: results})
        })
    }

    catch (error) {
        return res.status(400).json({message: 'Erro ao puxar Lista de funcionarios'})
    }
}

export const cadastrarFuncionario = (req, res) => {
    try {
        const {nome, sobrenome, setor, funcao} = req.body;
        connection.query('Insert into funcionarios(nome, sobrenome, setor, funcao) values (?, ?, ?, ?)', [nome, sobrenome, setor, funcao], (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(201).json({message: 'Funcionario adicionado com sucesso'})
        }) 
    }

    catch (error) {
        return res.status(400).json({message: 'Erro ao adicionar funcionario' })
    }
}

export const deletarFuncionario = (req, res) => {
    try {
        const {id} = req.params;
        connection.query('delete from funcionarios where id = (?)', [id], (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(201).json({message: 'Funcionario deletado'})
        })
    }

    catch (error) {
        return res.status(400).json({message: 'Erro ao deletar funcionario'})
    }
}

export const atualizarFuncionario = (req, res) => {
    try {
        const {nome, sobrenome, setor, funcao, id} = req.params;
        connection.query('update funcionarios set nome = (?), sobrenome = (?), setor = (?), funcao = (?) where id = (?)', [nome, sobrenome, setor, funcao, id], (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(201).json({message: 'Funcionario atualizado'})
        })
    }

    catch (error) {
        return res.status(400).json({message: 'Erro ao atualizar funcionario'})
    }
}

export const listarFuncionariosPorSetor = (req, res) => {
    try {
        const {setor} = req.params;
        connection.query('select * from funcionarios where setor = ?', [setor], (error, results) => {
            if (error) {
                return res.status(500).json({error: error.message});
            }
            return res.status(201).json({message: 'Lista dos funcionarios por setor', funcionarios:results})
        })
    }

    catch (error) {
        return res.status(400).json({message: 'Erro ao puxar Lista de funcionarios'})
    }
}

export default {
    listarFuncionarios,
    cadastrarFuncionario,
    deletarFuncionario,
    atualizarFuncionario,
    listarFuncionariosPorSetor
}