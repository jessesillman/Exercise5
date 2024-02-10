import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  // Add other fields based on your frontend structure
});

// If you want to support full-text search on first and last name
contactSchema.index({ first: 'text', last: 'text' });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

