const express = require('express');
const router = express.Router();

const S3 = require('../controllers/s3');
const catchAsync = require('../utils/catchAsync');
const Posting = require('../models/posting');
const postings = require('../controllers/postings');
const { validatePosting } = require('../middleware');

router.route('/')
  .get(catchAsync(postings.index))
  .post(validatePosting, catchAsync(postings.createPosting));

router.route('/deleteAll')
  .delete(catchAsync(postings.deleteAllPosting));

router.route('/:id')
  .get(catchAsync(postings.showPosting))
  .put(validatePosting, catchAsync(postings.updatePosting))
  .delete(catchAsync(postings.deletePosting));

router.route('/images')
  .post(S3.uploadImages)
  .get(S3.listImages);

module.exports = router;
