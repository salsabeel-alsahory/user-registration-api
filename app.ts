import express from 'express';
import { createConnection } from 'typeorm';
import { registerUser } from './controllers/UserController'; // Import your user registration controller
import { validateUser } from './middlewares/validateUser'; // Import your user validation middleware

const app = express();
app.use(express.json());

// Set up database connection
createConnection().then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Database connection error:', error);
});

// Use validation middleware
app.use(validateUser);

// Define your user registration route here
app.post('/register', registerUser);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
