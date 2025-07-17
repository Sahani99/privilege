const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');
const auth = require('../middleware/authMiddleware');

// @route   POST api/submissions
// @desc    Create a new submission
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newSubmission = new Submission({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    const submission = await newSubmission.save();
    res.json(submission);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/submissions
// @desc    Get all submissions
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;