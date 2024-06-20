/** @type {import('next').NextConfig} */
const nextConfig = {
    DB_USER: process.env.DB_USER || 'Windows Authentication User',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_SERVER: process.env.DB_SERVER || 'PRAVEEN-KUMAR14',
  DB_NAME: process.env.DB_NAME || 'praveen',
};

export default nextConfig;
