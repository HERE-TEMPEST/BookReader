import { Request, Response } from 'express';

class MainHandler {
  static login(request: Request, response: Response) {
    response.render('login');
  }

  static registration(request: Request, response: Response) {
    response.render('registration');
  }
}

export default MainHandler;
