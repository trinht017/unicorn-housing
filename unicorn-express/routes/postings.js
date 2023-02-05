const express = require('express');
const router = express.Router();

const S3 = require('../controllers/s3');
const catchAsync = require('../utils/catchAsync');
const postings = require('../controllers/postings');
const { validatePosting } = require('../middleware');
<<<<<<< HEAD
const { verifyJwt } = require('../utils/auth');
router
  .route('/')
=======

router.route('/')
>>>>>>> 0073a5bc5f0c5ab48244f90508a6d5f8bca8cf84
  .get(catchAsync(postings.index))
  .post(verifyJwt, validatePosting, catchAsync(postings.createPosting));

router.route('/deleteAll')
  .delete(catchAsync(postings.deleteAllPosting));

router.route('/:id')
  .get(catchAsync(postings.showPosting))
  .put(verifyJwt, validatePosting, catchAsync(postings.updatePosting))
  .delete(verifyJwt, catchAsync(postings.deletePosting));

<<<<<<< HEAD
const S3 = require('../controllers/s3');

router.route('/images').post(S3.uploadImages).get(S3.listImages);
=======
router.route('/images')
  .post(S3.uploadImages)
  .get(S3.listImages);
>>>>>>> 0073a5bc5f0c5ab48244f90508a6d5f8bca8cf84

module.exports = router;
