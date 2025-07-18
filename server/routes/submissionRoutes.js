const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');
const auth = require('../middleware/authMiddleware');

// @route   POST api/submissions
// @desc    Create a new submission (Updated to accept new fields)
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newSubmission = new Submission({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      whatsapp: req.body.whatsapp, // Added
      category: req.body.category, // Added
    });
    const submission = await newSubmission.save();
    res.json(submission);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/submissions
// @desc    Get all submissions (Updated with sorting and filtering)
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    let query = {};
    let sort = { createdAt: -1 }; // Default sort by newest

    // Filtering logic
    if (req.query.category) {
      query.category = req.query.category;
    }
    if (req.query.email) {
      // Use a regex for partial matching, case-insensitive
      query.email = { $regex: req.query.email, $options: 'i' };
    }

    // Sorting logic
    if (req.query.sortBy === 'date_asc') {
      sort = { createdAt: 1 };
    }

    const submissions = await Submission.find(query).sort(sort);
    res.json(submissions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/submissions/:id/notes
// @desc    Add a note to a submission
// @access  Private
router.put('/:id/notes', auth, async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ msg: 'Submission not found' });
    }

    const newNote = {
      text: req.body.text,
    };

    submission.notes.unshift(newNote); // Add to beginning of array
    await submission.save();
    res.json(submission.notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;