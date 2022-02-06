import { Router } from 'express';

import authHandler from './constrollers/auth-main';

const router = Router();

router.get('/', authHandler.login);

export default router;
