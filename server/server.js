// server/server.js

// =================================================================
console.log("--- V6: Adding back CORS middleware. ---");
// =================================================================

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Added back
require('dotenv').config();

const app = express();

console.log("[DEBUG] V6 MONGO_URI is:", process.env.MONGO_URI);

// --- ADDED BACK THE CORS CONFIGURATION ---
const corsOptions = {
  origin: "https://privilege-client.vercel.app", 
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization,x-auth-token",
  optionsSuccessStatus: 200
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
// ------------------------------------------

// Check if MONGO_URI exists
if (!process.env.MONGO_URI) {
  console.error("FATAL ERROR: V6 - MONGO_URI is not defined.");
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('V6: MongoDB Connected Successfully...'))
  .catch(err => {
    console.error("V6 FATAL: MongoDB Connection Error:", err);
    process.exit(1);
  });

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('V6: Hello World! Server with DB and CORS is running.');
});

app.listen(PORT, () => {
  console.log(`--- V6: Server started successfully on port ${PORT} ---`);
});