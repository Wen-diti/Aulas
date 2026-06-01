import express from 'express';
import funcionariosController from '../controllers/controllerFuncionarios.js'

const router = express.Router();

router.get('/', funcionariosController.listarFuncionarios)
router.post('/', funcionariosController.cadastrarFuncionario)
router.delete('/:id', funcionariosController.deletarFuncionario)
router.put('/:id', funcionariosController.atualizarFuncionario)
router.get('/setor', funcionariosController.listarFuncionariosPorSetor)

export default router