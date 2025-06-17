const router = require('express').Router();
const { caption, vibe } = require('../controllers/aiController');
router.post('/:id/caption', caption);
router.post('/vibe', vibe);
module.exports = router;