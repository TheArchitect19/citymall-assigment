const supabase = require('../services/supabaseService');

async function vote(req, res) {
  const { id } = req.params;
  const { type } = req.body;
  const delta = type === 'up' ? 1 : -1;
  const { data, error } = await supabase
    .from('memes')
    .update({ upvotes: supabase.raw('upvotes + ?', [delta]) })
    .eq('id', id)
    .select();
  if (error) return res.status(500).json(error);
  req.io.emit('voteUpdate', { id, upvotes: data[0].upvotes });
  res.json(data[0]);
}
module.exports = { vote };