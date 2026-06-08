import 'reflect-metadata';
import { getDataSource } from './config';
export class ApiDataSource {
    constructor() { }
    async connect() {
        console.log('Creating datasource with connection to database');
        console.log('DB_HOST:', process.env.DB_HOST);
        console.log('DB_PORT:', process.env.DB_PORT);
        // console.log('DB_USERNAME:', process.env.DB_USERNAME);
        // console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
        console.log('DB_DATABASE:', process.env.DB_DATABASE);
        const PostGresConnection = await getDataSource();
        try {
            if (!PostGresConnection.isInitialized) {
                console.log('Initialising datasource');
                await PostGresConnection.initialize();
            }
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.error(`Failed to connect to database: ${errorMessage}`);
            console.error('Full error:', error);
            throw error;
        }
        return PostGresConnection;
    }
}
