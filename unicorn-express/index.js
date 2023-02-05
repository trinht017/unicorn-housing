const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const guard = require('express-jwt-permissions')();
const cors = require('cors');
const axios = require('axios');
const { verifyJwt, jwtCheck } = require('./utils/auth');

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(verifyJwt);

const postingRoutes = require('./routes/postings');
app.use('/postings', postingRoutes);

app.all('*', (req, res, next) => {
  const error = new Error('not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';
  return res.status(status).send(message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
