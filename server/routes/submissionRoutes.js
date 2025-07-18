// server/routes/submissionRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const Submission = require('../models/Submission');
const auth = require('../middleware/authMiddleware'); // We keep the require to see if THIS file has an error

const upload = multer({ storage: multer.memoryStorage() });

// The POST route is fine.
router.post('/', upload.single('cv'), async (req, res) => {
  try {
    const newSubmission = new Submission({
      name: req.body.name,
      email: req.body.email,
      whatsapp: req.body.whatsapp,
      category: req.body.category,
      message: req.body.message,
    });
    
    if (req.file) {
      console.log('CV Uploaded:', req.file.originalname);
    }

    const submission = await newSubmission.save();
    res.status(201).json(submission);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/submissions
// --- THE FIX IS HERE: The 'auth' middleware has been temporarily removed from this line ---
router.get('/', async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;