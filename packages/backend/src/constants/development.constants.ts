import * as dotenv from 'dotenv';

dotenv.config();

export const DEV = {
  PORT_DEV: process.env.DEV_PORT,
  PORT: process.env.PORT,
} as const;
