const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  images: [String],
  address: String,
  bedBath: String,
  author: String,
});

module.exports = mongoose.model('Posting', PostingSchema);
