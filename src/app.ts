import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import routers from './routers';
import errorHandler from './error-handler';
import env from './config';

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
// use body-parser
app.use(bodyParser());
// define express-session(cookie-parser)
app.use(cookieParser(env.COOKIE_SECRET));

// declarate all routers
routers.forEach((router) => {
  app.use(router.path, router.router);
});

app.use(errorHandler.error404);
app.use(errorHandler.error500);

export default app;
