import 'dotenv/config'

import usuarioController from './controller/usuarioController.js';
import petController from './controller/petController.js';

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

//configuraçao dos endpoints
server.use(usuarioController);
server.use(petController);


server.listen(process.env.PORT, () => console.log(`API conectada na porta $ {process.env.PORT}`));