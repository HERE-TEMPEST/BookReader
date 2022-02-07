import { Router } from 'express';

import authHandler from './constrollers/auth-main';

const router = Router();

router.post('/login', authHandler.login);
router.post('/registration', authHandler.registration);
router.put('/reset_password', authHandler.registration);

export default router;
