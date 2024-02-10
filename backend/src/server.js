import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRouters from './routes/contactRoutes.js'; // Ensure the path is correct

// Create an instance of express
const app = express();

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Define a route for GET requests to the root URL ('/')
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// Use the contactRoutes and prefix them with '/api'
app.use('/api', contactRouters);

// Define the port to run the server on
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Exercise5')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server on the defined PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
