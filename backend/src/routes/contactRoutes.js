import express from 'express';
import Contact from '../models/contactModels.js'; // Adjust the path as necessary

const router = express.Router();

// Route to get all contacts
router.get('/contacts', async (req, res) => {
  try {
    const { query } = req.query;
    let contacts = await Contact.find(query ? { $text: { $search: query } } : {});
    // Add sorting logic if needed
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new contact
router.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add other routes (GET by ID, PUT, DELETE) similarly

export default router;
