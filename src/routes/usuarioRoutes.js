import express from "express";

import {
    criarUsuariosController,
    listarUsuariosController,
    atualizarUsuarioController,
    deletarUsuarioController
} from '../controllers/usuarioController.js';

const router = express.Router();

router.post('/', criarUsuariosController);
router.get('/', listarUsuariosController);
router.put('/:id', atualizarUsuarioController);
router.delete('/:id', deletarUsuarioController);

export default router;