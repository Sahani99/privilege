// server/server.js

// =================================================================
console.log("--- V5: Adding back Mongoose connection. ---");
// =================================================================

const express = require('express');
const mongoose = require('mongoose'); // Added back
require('dotenv').config(); // Added back

const app = express();

console.log("[DEBUG] V5 MONGO_URI is:", process.env.MONGO_URI);

// Check if MONGO_URI exists before trying to connect
if (!process.env.MONGO_URI) {
  console.error("FATAL ERROR: V5 - MONGO_URI is not defined in environment. Stopping server.");
  process.exit(1); // This stops the server immediately if the key is missing
}

// --- ADDED BACK THE DATABASE CONNECTION LOGIC ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('V5: MongoDB Connected Successfully...'))
  .catch(err => {
    console.error("V5 FATAL: MongoDB Connection Error:", err);
    process.exit(1); // Also stop the server on connection failure
  });
// ---------------------------------------------

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('V5: Hello World! The server with a database connection is running.');
});

app.listen(PORT, () => {
  console.log(`--- V5: Server started successfully on port ${PORT} ---`);
});