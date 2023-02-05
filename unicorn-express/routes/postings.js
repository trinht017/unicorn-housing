const express = require('express');
const router = express.Router();

const S3 = require('../controllers/s3');
const catchAsync = require('../utils/catchAsync');
const postings = require('../controllers/postings');
const { validatePosting } = require('../middleware');
const { verifyJwt } = require('../utils/auth');
router
  .route('/')
  .get(catchAsync(postings.index))
  .post(verifyJwt, validatePosting, catchAsync(postings.createPosting));

router.route('/deleteAll').delete(catchAsync(postings.deleteAllPosting));

router.route('/images')
  .post(S3.uploadImages)

router.route('/images/:id')
  .get(S3.listImages);

router.route('/:id')
  .get(catchAsync(postings.showPosting))
  .put(verifyJwt, validatePosting, catchAsync(postings.updatePosting))
  .delete(verifyJwt, catchAsync(postings.deletePosting));
module.exports = router;
