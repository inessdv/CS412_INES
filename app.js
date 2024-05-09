const express = require('express');
const router = express.Router();

// GET route with a fixed string response
router.get('/', (req, res) => {
    res.render('index', { string: 'Hey how is it going today?? What is your name?', showLength: false });
});

// POST route returning response
router.post('/', (req, res) => {
    const inputString = req.body.inputString || '';
    res.render('index', { string: inputString, length: inputString.length, showLength: true });
});

// GET route with named URL parameter
router.get('/names/:name', (req, res) => {
    const name = req.params.name;
    res.render('index', { string: `Hello, ${name}!`, showLength: false });
});

module.exports = router;