import { Router } from 'express';

import bookHandler from './controllers/book-main';

const router = Router();

router.get('/', bookHandler.getAllBook);

export default router;
