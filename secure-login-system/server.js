require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to MongoDB
connectDB();

// ✅ Middlewares
app.use(cors());
app.use(express.json({ extended: false }));

// ✅ Serve frontend (public) files
app.use(express.static(path.join(__dirname, 'secure-login-system', 'public')));

// ✅ API Routes
app.use('/api/auth', require('./routes/auth'));

// ✅ Serve main index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'secure-login-system', 'public', 'index.html'));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
