import { ConnectionPool, config as DbConfig } from 'mssql';

const dbConfig: DbConfig = {
  user: process.env.DB_USER || 'Windows Authentication User',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || 'PRAVEEN-KUMAR14',
  database: process.env.DB_NAME || 'Praveen',
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
};

let pool: ConnectionPool;

const getConnection = async (): Promise<ConnectionPool> => {
  if (!pool) {
    pool = await new ConnectionPool(dbConfig).connect();
  }
  return pool;
};

export default getConnection;
