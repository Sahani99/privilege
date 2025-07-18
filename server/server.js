// server/server.js

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('V4: Hello World! The basic server is running.');
});

app.listen(PORT, () => {
  console.log(`--- V4: Barebones server started successfully on port ${PORT} ---`);
});