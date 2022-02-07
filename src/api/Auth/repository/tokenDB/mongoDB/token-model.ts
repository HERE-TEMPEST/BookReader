import { Schema, model, Types } from 'mongoose';

export interface TokenShema {
  accessToken: string;
  refreshToken: string;
  userId: Types.ObjectId;
}

const tokenShema = new Schema<TokenShema>({
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  userId: { type: Types.ObjectId, unique: true, required: true },
});

export const tokenModel = model('token', tokenShema);
