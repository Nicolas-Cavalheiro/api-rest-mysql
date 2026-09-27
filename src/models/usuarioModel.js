import { pool } from '../config/db.js';

const criarUsuarios = async (nome, email) => {
    const [result] = await pool.query(
        "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
        [nome, email]
    );

    return{
        id: result.insertId,
        nome,
        email
    };
};

const listarUsuarios = async () => {
    const [rows] = await pool.query("SELECT * FROM usuarios");

    return rows;
};

const atualizarUsuario = async (id, nome, email) => {
    const [result] = await pool.query(
        "UPDATE usuarios SET nome = COALESCE(?, nome), email = COALESCE(?, email) WHERE id = ?",
        [nome || null, email || null, id]
    );

    return result;
};

const deletarUsuario = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM usuarios WHERE id = ?",
        [id]
    );

    return result;
};

export {
    criarUsuarios,
    listarUsuarios,
    atualizarUsuario,
    deletarUsuario
};