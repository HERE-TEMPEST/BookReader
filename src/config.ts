import { config } from 'dotenv';

config();

export default {
  PORT: process.env.BOOK_READER_PORT || 5000,
};
