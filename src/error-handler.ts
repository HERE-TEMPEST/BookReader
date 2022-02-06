import { Request, Response } from 'express';

const error404 = (request: Request, response: Response) => {
  try {
    response.status(404);
    response.render('404');
  } catch (error) {
    // error log
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const error500 = (error: Error, request: Request, response: Response, next: Function) => {
  try {
    response.status(500);
    response.render('500');
  } catch (err) {
    // err log
  }
};

export default {
  error404,
  error500,
};
