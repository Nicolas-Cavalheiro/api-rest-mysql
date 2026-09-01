import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const { nome, email } = req.body;

        const [result] = await pool.query(
            "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
            [nome, email]
        );

        res.status(201).json({id: result.insertId, nome, email }); 
    } catch(e) {
        res.status(500).json({erro: "Falha ao criar usuário"});
    }

        
});