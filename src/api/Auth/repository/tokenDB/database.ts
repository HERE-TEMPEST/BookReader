/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-empty-function */

import { Model, Types } from 'mongoose';

import { TokenShema, tokenModel } from './mongoDB/token-model';

export interface Token {
  accessToken: string;
  refreshToken: string;
  userId: Types.ObjectId;
}

export interface TokenDataBase {
  findByRefreshToken: Function;
  findByUserId(userId: Types.ObjectId): Promise<Token | undefined>;
  findByAccessToken: Function;
  findByUserIdAndDelete: Function;
  findByAccessTokenAndDelete: Function;
  findByRefreshTokenAndDelete: Function;
  findByUserIdAnUpdate: Function;
  findByAccessTokenAndUpdate: Function;
  findByRefreshTokenAndUpdate: Function;
  create(tokens: Token) : Promise<Token | undefined>;
}

class TokenMongoDB implements TokenDataBase {
  private Model: Model<TokenShema>;

  constructor(model: Model<TokenShema>) {
    this.Model = model;
  }

  async findByRefreshToken() {
    this.Model;
  }

  async findByUserId(userId: Types.ObjectId) : Promise<Token | undefined> {
    try {
      const token = await this.Model.findOne({ userId });

      if (!token) {
        return undefined;
      }

      return token;
    } catch (error) {
      return undefined;
    }
  }

  async findByAccessToken() {
    this.Model;
  }

  async findByAccessTokenAndUpdate() {
    this.Model;
  }

  async findByUserIdAnUpdate() {
    this.Model;
  }

  async findByRefreshTokenAndUpdate() {
    this.Model;
  }

  async findByUserIdAndDelete() {
    this.Model;
  }

  async findByAccessTokenAndDelete() {
    this.Model;
  }

  async findByRefreshTokenAndDelete() {
    this.Model;
  }

  async create(tokens: Token) : Promise<Token | undefined> {
    try {
      const token = await this.Model.findOne({ userId: tokens.userId });

      if (!token) {
        const newToken = new this.Model({
          userId: tokens.userId,
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        });
        await newToken.save();
        return newToken;
      }

      return token;
    } catch (error) {
      return undefined;
    }
  }
}

export const tokenDB = new TokenMongoDB(tokenModel);
