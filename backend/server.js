import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config(); // load .env variables
connectDB(); // connect to MongoDB
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to accept JSON data in requests

// Sample route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 👉 Product routes
app.use('/api/products', productRoutes);
// 👉 User routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
