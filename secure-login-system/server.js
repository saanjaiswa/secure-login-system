require('dotenv').config();
const express = require('express');
app.use(cors({
  origin: ['https://loginsystem-700t.onrender.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));-

const connectDB = require('./config/db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/auth', require('./routes/auth'));

// Fallback for SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
