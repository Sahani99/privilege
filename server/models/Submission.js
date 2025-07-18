const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// --- THIS BLOCK IS LIKELY MISSING ---
// Define what a "Note" looks like first.
const NoteSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
// -------------------------------------

// Now, define the main Submission, which USES the NoteSchema.
const SubmissionSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  whatsapp: { type: String },
  category: { type: String },
  notes: [NoteSchema], // This line will now work correctly
  cvPath: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', SubmissionSchema);