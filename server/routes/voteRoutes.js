const router = require('express').Router();
const { vote } = require('../controllers/voteController');
router.post('/:id/vote', vote);
module.exports = router;