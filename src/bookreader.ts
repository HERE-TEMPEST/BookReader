/* eslint-disable no-console */
import http from 'http';
import mongoose from 'mongoose';

import env from './config';
import app from './app';

async function connect() {
  try {
    const server = http.createServer(app);
    mongoose.connect(env.BD_URL)
      .then(() => {
        console.log('connect to database is success');
        server.listen(env.PORT, () => {
          console.log(`server start with port = ${env.PORT}`);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

connect();
