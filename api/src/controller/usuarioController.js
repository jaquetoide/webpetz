import { login } from '../repository/usuarioRepository.js'

import { Router } from "express";
const server = Router();

server.post('/uuario/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const response = await login(email,senha); 
            if (!resposta) {
                throw new Error ('Credenciais invalidas')
            }
        resp.send(respostas)
    } catch (err) {
        resp.status(401).send ({
            erro: err.message
        })
    }
})

export default server;


