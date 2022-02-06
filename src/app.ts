import express from 'express';
import { engine } from 'express-handlebars';

import routers from './routers';
import errorHandler from './error-handler';

const app = express();

// use public static files
app.use(express.static(`${__dirname}/../public`));

// define engine for views dynamic files
app.engine('handlebars', engine({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// use json parser
app.use(express.json());

// declarate all routers
routers.forEach((router) => {
  app.use(router.path, router.router);
});

app.use(errorHandler.error404);
app.use(errorHandler.error500);

export default app;
