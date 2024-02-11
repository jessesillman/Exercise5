import express from 'express';
import Contact from '../models/contactModels.js';

const router = express.Router();

// Since Express 4.16+ you can use express.json() and express.urlencoded() for built-in body parsing
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post('/contact', async (req, res) => {
    const { first, last, avatarUrl, notes, twitter } = req.body;
    const contact = new Contact({
        first: first,
        last: last,
        avatarUrl: avatarUrl,
        notes: notes,
        twitter: twitter,
    });

    try {
        const savedContact = await contact.save();
        res.status(200).json({
            success: true,
            message: 'Contact saved successfully!',
            data: savedContact
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// ES6 default export syntax
export default router;
