const axios = require('axios');
const { GEMINI_API_KEY } = require('../config');
const cache = require('../utils/cache');
const BASE = 'https://api.aistudio.google.com/v1/gemini/generate';

async function generate(prompt) {
  if (cache.get(prompt)) return cache.get(prompt);
  try {
    const res = await axios.post(BASE, { prompt }, {
      headers: { Authorization: `Bearer ${GEMINI_API_KEY}` }
    });
    const text = res.data.text;
    cache.set(prompt, text);
    return text;
  } catch {
    return 'YOLO to the moon!';
  }
}
module.exports = { generateCaption: (tags) => generate(`Funny caption for meme with tags: ${tags}`),
                   generateVibe: (tags) => generate(`Describe the vibe of a meme with tags: ${tags}`)};