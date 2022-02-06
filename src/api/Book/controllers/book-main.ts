import { Request, Response } from 'express';

class BookHandler {
  static getAllBook(request: Request, response: Response) {
    if (!request.body) {
      throw new Error('not found');
    }
    response.render('book');
  }
}

export default BookHandler;
