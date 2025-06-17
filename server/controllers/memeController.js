const supabase = require('../services/supabaseService');

async function createMeme(req, res) {
  const { title, image_url, tags } = req.body;
  const { data, error } = await supabase
    .from('memes')
    .insert({ title, image_url, tags, upvotes: 0, owner_id: 'hackuser' })
    .select();
  if (error) return res.status(500).json(error);
  res.json(data[0]);
}
async function listMemes(req, res) {
  const { data, error } = await supabase.from('memes').select('*');
  if (error) return res.status(500).json(error);
  res.json(data);
}
module.exports = { createMeme, listMemes };