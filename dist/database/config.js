import 'reflect-metadata';
import * as fs from 'fs';
import { DataSource } from 'typeorm';
const dataSourceOptions = {
    type: 'postgres',
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT ?? '5432') ?? 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    ssl: {
        ca: fs.readFileSync('./global-bundle.pem').toString(),
    },
    entities: [],
    migrations: [],
    migrationsRun: true,
    logging: ['error', 'schema', 'warn', 'info'],
    connectTimeoutMS: 50000,
};
// Lazy-load DataSource - only create when needed, not at import time
// To-Do: Check if this applies across instances
let dataSourceInstance = null;
export async function getDataSource() {
    if (!dataSourceInstance) {
        console.log('🔧 Creating new DataSource instance');
        dataSourceInstance = new DataSource({ ...dataSourceOptions });
    }
    return dataSourceInstance;
}
// Default export as a getter function, not instantiated
export default { getDataSource };
