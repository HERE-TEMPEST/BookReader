import { config } from 'dotenv';

config();

export default {
  PORT: process.env.BOOK_READER_PORT || 5000,
  COOKIE_SECRET: process.env.COOKIE_SECRET || 'secret_value',
  BD_URL: process.env.MONGODB_URL || '',
};
