// tokenRoutes.js
// Route for handling token creation

const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
    res.send('USDT token created!');
});

module.exports = router;
