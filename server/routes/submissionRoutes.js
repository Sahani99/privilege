const express = require('express');
const router = express.Router();
const multer = require('multer');
const Submission = require('../models/Submission');
const auth = require('../middleware/authMiddleware');

// Configure Multer. For now, we'll use memory storage.
// In a full production system, you'd configure this to upload to a service like AWS S3.
const upload = multer({ storage: multer.memoryStorage() });

// @route   POST api/submissions
// @desc    Create a new submission
// @access  Public
// We use `upload.single('cv')` as middleware to handle the file upload.
router.post('/', upload.single('cv'), async (req, res) => {
  try {
    const { name, email, whatsapp, category, message } = req.body;

    const newSubmission = new Submission({
      name,
      email,
      whatsapp,
      category,
      message,
      // In a real system, `req.file` would be uploaded to cloud storage,
      // and you'd save the URL here. For now, we'll just note the original name.
      cvPath: req.file ? req.file.originalname : null,
    });

    const submission = await newSubmission.save();
    res.json(submission);
  } catch (err) {
    console.error('Submission Error:', err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/submissions
// @desc    Get all submissions with filtering and sorting
// @access  Private (Requires admin login)
router.get('/', auth, async (req, res) => {
  try {
    // --- NEW: Filtering Logic ---
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    if (req.query.email) {
      // Use a regular expression for partial matching, case-insensitive
      filter.email = { $regex: req.query.email, $options: 'i' };
    }

    // --- NEW: Sorting Logic ---
    const sortOptions = {};
    if (req.query.sortBy === 'date_asc') {
      sortOptions.createdAt = 1; // 1 for ascending
    } else {
      sortOptions.createdAt = -1; // -1 for descending (default)
    }

    const submissions = await Submission.find(filter).sort(sortOptions);
    res.json(submissions);
  } catch (err) {
    console.error('Get Submissions Error:', err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/submissions/:id/notes
// @desc    Add a new note to a submission
// @access  Private (Requires admin login)
router.put('/:id/notes', auth, async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ msg: 'Submission not found' });
    }

    const newNote = {
      text: req.body.text,
      // You could also add `author: req.user.id` if you wanted to track which admin added the note
    };

    // Add the new note to the beginning of the array
    submission.notes.unshift(newNote);

    await submission.save();

    // Return the updated list of notes for that submission
    res.json(submission.notes);
  } catch (err) {
    console.error('Add Note Error:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;