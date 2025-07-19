// server/server.js

// =================================================================
console.log("--- V7: FINAL ATTEMPT. Using simplest possible CORS. ---");
// =================================================================

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Keep the import
require('dotenv').config();

const app = express();

// 1. First, handle CORS to allow requests.
const allowedOrigins = [
  'https://privilege-client.vercel.app/', // <-- REPLACE WITH YOUR CLIENT URL
  'https://privilege-admin-eight.vercel.app', // <-- REPLACE WITH YOUR ADMIN URL
  'http://localhost:3000' // For local development
];

const corsOptions = {
  origin: function (origin, callback) {
    
    // ======================= THE DEBUGGING LINE =======================
    console.log(`CORS CHECK: The origin making the request is: [${origin}]`);
    // ================================================================

    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // If you don't have this, that's fine too.

// 2. Second, teach the server to parse JSON bodies. THIS IS THE FIX.
app.use(express.json());

// 3. Third, define your API routes.
app.use('/api/submissions', require('./routes/submissionRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('V7: MongoDB Connected Successfully...'))
  .catch(err => {
    console.error("V7 FATAL: MongoDB Connection Error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('V7: Full server with simple CORS is running.');
});

app.listen(PORT, () => {
  console.log(`--- V7: Server started successfully on port ${PORT} ---`);
});