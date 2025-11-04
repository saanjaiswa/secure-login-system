require('dotenv').config();
const express = require('express');
app.use(cors({
  origin: ['https://loginsystem-700t.onrender.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));

const connectDB = require('./config/db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/auth'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/auth'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
