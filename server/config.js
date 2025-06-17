require('dotenv').config();
module.exports = {
  PORT: process.env.PORT || 4000,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY
};