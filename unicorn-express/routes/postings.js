const express = require('express');
const router = express.Router();

router.route('/').get();

router.route('/:id').get();

router.route('/:id/edit');

module.exports = router;
