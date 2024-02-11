import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  first: String,
    last: String,
    twitter: String,
    avatarUrl: String,
    notes: String,
});

// If you want to support full-text search on first and last name
contactSchema.index({ first: 'text', last: 'text' });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;

