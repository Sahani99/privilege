// server/server.js

// =================================================================
console.log("--- V3: SERVER STARTING. Disabling API routes to test core server. ---");
// =================================================================

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

console.log("[DEBUG] MONGO_URI:", process.env.MONGO_URI);

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

if (!process.env.MONGO_URI) {
  console.error("FATAL ERROR: MONGO_URI is not defined.");
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

// --- THE FIX IS HERE: We are commenting out the routes ---
// app.use('/api/submissions', require('./routes/submissionRoutes'));
// app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));