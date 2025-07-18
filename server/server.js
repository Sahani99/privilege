// server/server.js

// =================================================================
console.log("--- V7: FINAL ATTEMPT. Using simplest possible CORS. ---");
// =================================================================

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Keep the import
require('dotenv').config();

const app = express();

console.log("[DEBUG] V7 MONGO_URI is:", process.env.MONGO_URI);

// --- THE FIX IS HERE: We are using the simplest CORS config ---
app.use(cors());
// -----------------------------------------------------------

// Now add the other middleware
app.use(express.json());

// And re-enable the routes
app.use('/api/submissions', require('./routes/submissionRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Check if MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.error("FATAL ERROR: V7 - MONGO_URI is not defined.");
  process.exit(1);
}

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