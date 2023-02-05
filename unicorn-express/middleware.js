const { postingSchema } = require('./schemas.js');

module.exports.validatePosting = (req, res, next) => {
  const { error } = postingSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((e) => e.message).join(',');
    throw new Error(msg, 400);
  } else {
    next();
  }
};

module.exports.isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const posting = await Posting.findById(id);
  if (!posting.author.equals(req.user._id)) {
    return res.status(400).send('must be the author');
  }
  next();
};

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(400).send('must be logged in');
  }
  next();
};
