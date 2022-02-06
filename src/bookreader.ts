import http from 'http';
import env from './config';
import app from './app';

try {
  const server = http.createServer(app);

  server.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`server start with port = ${env.PORT}`);
  });
} catch (error) {
  // error debug;
}
