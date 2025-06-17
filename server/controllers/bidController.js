const supabase = require('../services/supabaseService');

async function postBid(req, res) {
  const { id } = req.params;
  const { credits } = req.body;
  const bid = { meme_id: id, user_id: 'cyberpunk420', credits };
  const { data, error } = await supabase.from('bids').insert(bid).select();
  if (error) return res.status(500).json(error);
  req.io.emit('newBid', { id, bid: data[0] });
  res.json(data[0]);
}
module.exports = { postBid };