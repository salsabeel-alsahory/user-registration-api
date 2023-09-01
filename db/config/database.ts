// // db/config/database.ts
// import { createConnection } from 'typeorm';
// import { config } from 'dotenv'; // Import dotenv to load environment variables

// // Load environment variables from .env file
// config();

// export const connectDatabase = async () => {
//   try {
//     const connection = await createConnection({
//       type: 'mysql',
//       host: process.env.DB_HOST || 'localhost', 
//       port: parseInt(process.env.DB_PORT) || 3306,
//       username: process.env.DB_USER || 'root', 
//       password: process.env.DB_PASSWORD || '', 
//       database: process.env.DB_DATABASE || 'project', 
//       entities: [/* Your entities here */ ],
//       migrations: ['./**/migration/*.ts'],
//       synchronize: true, 
//       logging: false
//     });
//     console.log('Connected to the database!');
//     return connection;
//   } catch (error) {
//     console.error('Database connection error:', error);
//     throw error;
//   }
// };
