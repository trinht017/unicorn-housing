const express = require('express');
const router = express.Router();
let list = [
  {
    id: 1,
    images: ['../images/p-1.png'],
    address: '210 Zirak Road, Canada',
    price: 3700,
    name: 'Clemson Edge',
    bedBath: '2 Bed 2 Bath',
    description: 'Located near the Clemson lake right on the beach etc',
    author: 'Lucas Boyer',
  },
  {
    id: 2,
    images: ['../images/p-1.png'],
    address: '210 Zirak Road, Canada',
    price: 3700,
    name: 'Clemson Edge',
    bedBath: '2 Bed 2 Bath',
    description: 'Located near the Clemson lake right on the beach etc',
    author: 'Lucas Boyer',
  },
  {
    id: 3,
    images: ['../images/p-1.png'],
    address: '210 Zirak Road, Canada',
    price: 3700,
    name: 'Clemson Edge',
    bedBath: '2 Bed 2 Bath',
    description: 'Located near the Clemson lake right on the beach etc',
    author: 'Lucas Boyer',
  },
  {
    id: 4,
    images: ['../images/p-1.png'],
    address: '210 Zirak Road, Canada',
    price: 3700,
    name: 'Clemson Edge',
    bedBath: '2 Bed 2 Bath',
    description: 'Located near the Clemson lake right on the beach etc',
    author: 'Lucas Boyer',
  },
  {
    id: 5,
    images: ['../images/p-1.png'],
    address: '210 Zirak Road, Canada',
    price: 3700,
    name: 'Clemson Edge',
    bedBath: '2 Bed 2 Bath',
    description: 'Located near the Clemson lake right on the beach etc',
    author: 'Lucas Boyer',
  },
  {
    id: 6,
    images: ['../images/p-1.png'],
    address: '210 Zirak Road, Canada',
    price: 3700,
    name: 'Clemson Edge',
    bedBath: '2 Bed 2 Bath',
    description: 'Located near the Clemson lake right on the beach etc',
    author: 'Lucas Boyer',
  },
  {
    id: 7,
    images: ['../images/p-1.png'],
    address: '210 Zirak Road, Canada',
    price: 3700,
    name: 'Clemson Edge',
    bedBath: '2 Bed 2 Bath',
    description: 'Located near the Clemson lake right on the beach etc',
    author: 'Lucas Boyer',
  },
];
router.route('/').get((req, res) => {
  res.json(list);
});
const S3 = require('../controllers/s3');

//router.route('/').get();

//router.route('/:id').get();

//router.route('/:id/edit');

router.route('/images').post(S3.uploadImages).get(S3.listImages);

router.route('/:id/edit');

module.exports = router;
