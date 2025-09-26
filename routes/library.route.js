const express = require('express');
const { Library, library } = require('../model/library.model')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log('req >> ', req.body)
        const { title, author, genre, status } = req.body;
        const book = new Library(title, author, genre, status);
        console.log('book >> ', book)
        library.push(book);
        res.status(201).json({ msg: 'Book added', library })
    } catch (err) {
        res.status(500).json({ msg: 'Something went wrong' })
    }
})

module.exports = router