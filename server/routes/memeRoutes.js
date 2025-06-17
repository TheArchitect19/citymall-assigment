const router = require('express').Router();
const { createMeme, listMemes } = require('../controllers/memeController');
router.post('/', createMeme);
router.get('/', listMemes);
module.exports = router;