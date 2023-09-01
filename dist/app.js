// app.ts
import express from 'express';
import { connectDatabase } from './db/config/database';
import userRoutes from './routes/userRoutes';
const app = express();
app.use(express.json());
// Use userRoutes for user registration
app.use('/user', userRoutes);
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await connectDatabase(); // Connect to the database
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start the server:', error);
    }
};
startServer();
