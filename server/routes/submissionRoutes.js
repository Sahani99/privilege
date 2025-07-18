const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');
const auth = require('../middleware/authMiddleware');
const multer = require('multer'); 
const upload = multer({ storage: multer.memoryStorage() });


// @route   POST api/submissions
// @desc    Create a new submission
// @access  Public
router.post('/', upload.single('cv'), async (req, res) => {
  try {
    const newSubmission = new Submission({
      name: req.body.name,
      email: req.body.email,
      whatsapp: req.body.whatsapp,
      category: req.body.category,
      message: req.body.message,
      // cvPath: (In a real app, you'd get a URL from S3 here)
    });
    
    // You can access file info via req.file if needed
    if (req.file) {
      console.log('Uploaded CV:', req.file.originalname);
      // In a production app, you would now upload req.file.buffer to S3
      // and save the resulting URL in newSubmission.cvPath
    }

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