import { Request, Response } from 'express';

class AuthHandler {
  static login(request: Request, response: Response) {
    const { username, password } = request.body;

    if (username !== 'andrei' || password !== 'andrei') {
      response.cookie('password', password, {
        httpOnly: true,
      });

      return response.render('login', {
        error_msg: 'email or password is invalid',
      });
    }

    return response.redirect(303, '/book');
  }

  static registration(request: Request, response: Response) {
    // eslint-disable-next-line no-console
    console.log('registration');
    return response.redirect(303, '/book');
  }
}

export default AuthHandler;
