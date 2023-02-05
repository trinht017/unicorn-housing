const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  address: String,
  bed: Number,
  bath: Number,
  author: String,
});

module.exports = mongoose.model('Posting', PostingSchema);
