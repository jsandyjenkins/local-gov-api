// DO NOT EDIT — this file is used by the TypeORM CLI for migrations (config.ts is used at runtime).
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const dataSourceOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT ?? '5432') ?? 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.PGDATABASE,
  entities: [],
};
// @ts-ignore
export default new DataSource(dataSourceOptions);
