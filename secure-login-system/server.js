require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// 👇 Add this line to serve frontend files
app.use(express.static('public'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.get('/', (req, res) => res.send('Secure Login System is running'));

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
