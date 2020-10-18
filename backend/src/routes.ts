import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index); //listar
routes.get('/orphanages/:id', OrphanagesController.show); //listar um unico orfanato
routes.post('/orphanages', upload.array('images'), OrphanagesController.create); //criar

export default routes;