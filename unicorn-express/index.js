const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { auth } = require('express-oauth2-jwt-bearer');
const guard = require('express-jwt-permissions')();

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

const jwtCheck = auth({
  audience: 'https://unicron-api.com',
  issuerBaseURL: 'https://dev-ix13ko5ij4ojfhls.us.auth0.com/',
  tokenSigningAlg: 'HS256',
});

// enforce on all endpoints
app.use(jwtCheck);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', guard.check(['read:challenges']), (req, res) => {
  res.json({
    hello: 'this is the first one',
    hi: 'this is the second one',
  });
});

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

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
