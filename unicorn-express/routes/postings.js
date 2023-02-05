const express = require('express');
const router = express.Router();
const S3 = require('../controllers/s3');

//router.route('/').get();

//router.route('/:id').get();

//router.route('/:id/edit');

router.route('/images')
    .post(S3.uploadImages)
    .get(S3.listImages);

module.exports = router;