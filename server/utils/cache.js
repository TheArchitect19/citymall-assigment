const cache = new Map();
module.exports = {
  get: (key) => cache.get(key),
  set: (key, val) => cache.set(key, val)
};