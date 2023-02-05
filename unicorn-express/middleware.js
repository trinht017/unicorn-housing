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
