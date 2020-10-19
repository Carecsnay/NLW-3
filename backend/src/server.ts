import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler'

const app = express();

app.use(cors()); //desbloquear portas para os fronends acessar as apis
app.use(express.json()); // serve para o node entender estruturas com JSON 
app.use(routes); //desestruturação das rotas 
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); // funcionalidade estatica para acessar as imgs
app.use(errorHandler); //tratamento de errors

app.listen(3333);