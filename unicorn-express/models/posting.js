const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  location: String,
});

module.exports = mongoose.model('Posting', PostingSchema);
