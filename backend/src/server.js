import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRouter from './routes/contactRoutes.js';  // Adjust the path if necessary

const app = express();

// Middleware setup
app.use(cors()); // Enables CORS
app.use(express.json()); // Parses incoming JSON requests

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// API routes
app.use('/api', contactRouter);

// Server port
const PORT = 3000;

// MongoDB connection without the deprecated options
mongoose.connect('mongodb://localhost:27017/Exercise5')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Starting the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
