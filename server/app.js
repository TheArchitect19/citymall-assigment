const express = require('express');
const cors = require('cors');
const config = require('./config');
const memeRoutes = require('./routes/memeRoutes');
const bidRoutes = require('./routes/bidRoutes');
const voteRoutes = require('./routes/voteRoutes');
const aiRoutes = require('./routes/aiRoutes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/memes', memeRoutes);
app.use('/memes', bidRoutes);
app.use('/memes', voteRoutes);
app.use('/memes', aiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Meme Marketplace API');
}
);
module.exports = app;