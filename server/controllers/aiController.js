const ai = require('../services/aiService');

async function caption(req, res) {
  const { id } = req.params;
  const { tags } = req.body;
  const text = await ai.generateCaption(tags);
  res.json({ caption: text });
}
async function vibe(req, res) {
  const { tags } = req.body;
  const text = await ai.generateVibe(tags);
  res.json({ vibe: text });
}
module.exports = { caption, vibe };