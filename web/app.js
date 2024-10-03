// app.js
// Main Node.js script for web version

const express = require('express');
const app = express();
const tokenRoutes = require('./routes/tokenRoutes');

app.use(express.json());
app.set('view engine', 'ejs');

app.use('/tokens', tokenRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Web version running on port 3000');
});
