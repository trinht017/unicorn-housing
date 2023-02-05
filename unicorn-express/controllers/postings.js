const Posting = require('../models/posting');

module.exports.index = async (req, res) => {
  const postings = await Posting.find({});
  res.json(postings);
};

module.exports.createPosting = async (req, res) => {
  const posting = new Posting(req.body);
  await posting.save();
  res.status(200).send(posting);
};

module.exports.showPosting = async (req, res) => {
  const posting = await Posting.findById(req.params.id);
  res.json(posting);
};

module.exports.updatePosting = async (req, res) => {
  const { id } = req.params;
  const posting = await Posting.findByIdAndUpdate(id, { ...req.body });
  await posting.save();

  res.status(200).send();
};

module.exports.deletePosting = async (req, res) => {
  const { id } = req.params;
  await Posting.findByIdAndDelete(id);

  res.status(200).send();
};

module.exports.deleteAllPosting = async (req, res) => {
  await Posting.remove({});
  res.status(200).send();
};
