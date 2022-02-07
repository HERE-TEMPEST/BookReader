import { Types } from 'mongoose';
import { sign, verify } from 'jsonwebtoken';

import { tokenDB, TokenDataBase, Token } from '../../repository/tokenDB/database';

export interface JWTPayload {
  userId: Types.ObjectId;
}

class TokenService {
  private database: TokenDataBase;

  constructor(database: TokenDataBase) {
    this.database = database;
  }

  static verifyAccessToken(accessToken: string): JWTPayload {
    const payload = verify(accessToken, 'asdsd12ddxq_213r2-12312') as JWTPayload;

    return payload;
  }

  static verifyRefreshToken(refreshToken: string): JWTPayload {
    const payload = verify(refreshToken, 'asdddwwet23r2f23h43asd-123sda33312') as JWTPayload;

    return payload;
  }

  async createTokens(payload: JWTPayload): Promise<Token> {
    let isToken = await this.database.findByUserId(payload.userId);

    if (!isToken) {
      const accessToken = sign(payload, 'asdsd12ddxq_213r2-12312');
      const refreshToken = sign(payload, 'asdddwwet23r2f23h43asd-123sda33312');

      isToken = await this.database.create({ accessToken, refreshToken, userId: payload.userId });
      if (!isToken) {
        throw new Error('error in server');
      }
    }

    return isToken;
  }
}

const tokenService = new TokenService(tokenDB);

export default tokenService;
