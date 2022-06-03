import { alteararPet, buscarPorID, buscarPorRaca, inserirPet, listarTodosPets, removerPet } from '../repository/petRepository.js'

import multer from 'multer'
import { Router } from 'express'

const server = Router();
const upload = multer ({ dest: 'storage'})