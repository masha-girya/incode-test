import * as dotenv from 'dotenv';

dotenv.config();

export const DB = {
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  NAME: process.env.DB_NAME,
  HOST: process.env.DB_HOST,
} as const;
