import { Router } from 'express';

import mainHandler from './controllers/main';

const router = Router();

router.get('/', mainHandler.login);
router.get('/registration', mainHandler.registration);

export default router;
