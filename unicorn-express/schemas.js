const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
  type: 'string',
  base: joi.string(),
  messages: {
    'string.escapeHTML': '{{#label}} must not include HTML!',
  },
  rules: {
    escapeHTML: {
      validate(value, helpers) {
        const clean = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {},
        });
        if (clean !== value)
          return helpers.error('string.escapeHTML', { value });
        return clean;
      },
    },
  },
});

const Joi = BaseJoi.extend(extension);

module.exports.postingSchema = Joi.object({
  title: Joi.string().required().escapeHTML(),
  price: Joi.number().required().min(0),
  address: Joi.string().required().escapeHTML(),
  description: Joi.string().required().escapeHTML(),
  bed: Joi.number().required().min(0),
  bath: Joi.number().required().min(0),
  author: Joi.string().required().escapeHTML(),
});
