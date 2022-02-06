import { Router } from 'express';
import bookRouter from './api/Book/router';
import authRouter from './api/Auth/router';

interface RoutersInterface {
  path: string;
  router: Router;
}

const routers: RoutersInterface[] = [
  {
    router: bookRouter,
    path: '/book',
  },
  {
    router: authRouter,
    path: '/',
  },
];

export default routers;
