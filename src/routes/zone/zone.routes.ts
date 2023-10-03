import { ZoneController } from '../../controllers';
import { Router } from 'express';

export const router = Router();

router.get('/zone', ZoneController.index);

router.post('/zone', ZoneController.store);

router.delete('/zone', ZoneController.delete);
