const router = require('express').Router();
const { postBid } = require('../controllers/bidController');
router.post('/:id/bid', postBid);
module.exports = router;