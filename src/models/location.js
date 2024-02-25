const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  rating: Number,
  review_count: Number,
  latitude: Number,
  longitude: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Location', locationSchema);