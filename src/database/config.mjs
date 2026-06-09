// DO NOT EDIT — this file is used by the TypeORM CLI for migrations (config.ts is used at runtime).
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { PremisesLicense } from './entities/premises-license.entity.js';

export const dataSourceOptions = {
  type: 'postgres',
  host: process.env.PGHOST || 'localhost',
  port: parseInt(process.env.PGPORT ?? '5432') ?? 5432,
  username: process.env.POSTGRES_USER || 'user',
  password: process.env.POSTGRES_PASSWORD || 'Secret123',
  database: process.env.PGDATABASE || 'postgres',
  entities: [PremisesLicense],
};
// @ts-ignore
export default new DataSource(dataSourceOptions);
