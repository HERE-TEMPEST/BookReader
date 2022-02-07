import { Router } from 'express';
import bookRouter from './api/Book/router';
import authRouter from './api/Auth/router';
import mainRouter from './api/Main/router';

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
    path: '/auth',
  },
  {
    router: mainRouter,
    path: '/',
  },
];

export default routers;
