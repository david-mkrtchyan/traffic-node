import { DeleteMiddleware, StoreMiddleware } from '../../middlewares';
import { ZoneController } from '../../controllers';
import { Router } from 'express';

export const router = Router();

router.get('/zone', ZoneController.index);

router.get('/zone/:id', ZoneController.show);

router.post('/zone', StoreMiddleware.validate, ZoneController.store);

router.delete('/zone/:id', DeleteMiddleware.validate, ZoneController.delete);
