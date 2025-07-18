const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  cvPath: { type: String }, // We will handle file uploads later if needed
  whatsapp: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Submission', SubmissionSchema);