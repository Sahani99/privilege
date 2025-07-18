const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
// app.use(cors()); // Allows cross-origin requests
const corsOptions = {
  // Replace with your Vercel frontend URL. VERY IMPORTANT.
  origin: "https://privilege-client.vercel.app", 
  methods: "GET,POST,PUT,DELETE", // Allow these methods
  allowedHeaders: "Content-Type,Authorization,x-auth-token", // Allow these headers
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// 2. Handle preflight OPTIONS requests for all routes
// This will respond to the browser's security check before it sends the real request.
app.options('*', cors(corsOptions));

// 3. Use the CORS middleware for all other requests
app.use(cors(corsOptions));

app.use(express.json()); // Allows us to parse JSON in request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));

// API Routes
app.use('/api/submissions', require('./routes/submissionRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));