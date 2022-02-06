import { Request, Response } from 'express';

class AuthHandler {
  static login(request: Request, response: Response) {
    if (!request.body) {
      throw new Error('not found');
    }
    response.render('login');
  }
}

export default AuthHandler;
