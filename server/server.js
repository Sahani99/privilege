// server/server.js

// =================================================================
// --- THIS IS OUR OBVIOUS DEBUGGING MESSAGE ---
console.log("--- V2: SERVER STARTING. Attempting to load environment variables. ---");
// =================================================================

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Let's print the variable to be 100% sure
console.log("[DEBUG] The value for MONGO_URI is:", process.env.MONGO_URI);


const app = express();

const corsOptions = {
  origin: "https://privilege-client.vercel.app", 
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization,x-auth-token",
  optionsSuccessStatus: 200
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());

// Check if MONGO_URI exists before trying to connect
if (!process.env.MONGO_URI) {
  console.error("FATAL ERROR: MONGO_URI is not defined. Stopping server.");
  process.exit(1); // This stops the server immediately if the key is missing
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Also stop the server on connection failure
  });

app.use('/api/submissions', require('./routes/submissionRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));