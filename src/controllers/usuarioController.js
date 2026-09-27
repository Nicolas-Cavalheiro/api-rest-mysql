import {
    criarUsuarios,
    listarUsuarios,
    atualizarUsuario,
    deletarUsuario
} from '../models/usuarioModel.js';

const criarUsuariosController = async (req, res) => {
    try {
        const { nome, email } = req.body;

        const usuario = await criarUsuarios (nome, email);

        res.status(201).json(usuario)
    } catch (e){
        res.status(500).json({erro: "Falha ao criar o usuário."})
    }
};

const listarUsuariosController = async (req, res) => {
    try {
        const usuarios = await listarUsuarios();

        res.json(usuarios);
    } catch (e){
        res.status(500).json({erro: "Falha ao listar usuários"});
    }
};

const atualizarUsuarioController = async (req, res) => {
    try{
        const {id} = req.params;
        const {nome, email} = req.body;

        const novoUsuario = await atualizarUsuario (id, nome, email);

        if (!novoUsuario.affectedRows){
            return res.status(404).json({erro: "Usuário não encontrado"});
        }

        res.json({mensagem: "Atualizado com sucesso"});
    } catch (e){
        res.status(500).json({erro: "Falha ao atualziar o usuário"});
    }
};

const deletarUsuarioController = async (req, res) => {
    try{
        const {id} = req.params;

        const usuarioDeletado = await deletarUsuario (id);

        if (!usuarioDeletado.affectedRows){
            return res.status(404).json({erro: "Usuário não encontrado"});
        }

        res.json({mensagem: "Deletado com sucesso"});
    } catch (e){
        res.status(500).json({erro: "Falha ao deletar o usuário"});
    }
};

export {
    criarUsuariosController,
    listarUsuariosController,
    atualizarUsuarioController,
    deletarUsuarioController
};