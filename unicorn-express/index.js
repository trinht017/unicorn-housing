const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { auth } = require('express-oauth2-jwt-bearer');
const guard = require('express-jwt-permissions')();
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const axios = require('axios');

const verifyJwt = jwt.expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-ix13ko5ij4ojfhls.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://unicron-api.com',
  issuer: process.env.ISSUER_BASE_URL,
  algorithms: ['RS256'],
});

const dbUrl = process.env.ATLAS_URI;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const app = express();
app.use(cors());

app.get('/chicken', (req, res) => {
  res.send('hello from chicken');
});

app.get('/protected', (req, res) => {
  res.send('protected chunk');
});

// const jwtCheck = auth({
//   audience: 'https://unicron-api.com',
//   issuerBaseURL: 'https://dev-ix13ko5ij4ojfhls.us.auth0.com/',
//   tokenSigningAlg: 'RS256',
// });

// enforce on all endpoints
// app.use(jwtCheck);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const postingRoutes = require('./routes/postings');
app.use('/postings', postingRoutes);

app.all('*', (req, res, next) => {
  next(res.statusCode(404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh No, Someting Went Wrong!';
  return res.status(statusCode);
});

app.use('/postings', postingRoutes)

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
