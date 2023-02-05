var { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');

module.exports.verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-ix13ko5ij4ojfhls.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://unicorn-api.com',
  issuer: 'https://dev-ix13ko5ij4ojfhls.us.auth0.com/',
  algorithms: ['RS256'],
});

const { auth } = require('express-oauth2-jwt-bearer');

module.exports.jwtCheck = auth({
  audience: 'https://unicorn-api.com',
  issuerBaseURL: 'https://dev-ix13ko5ij4ojfhls.us.auth0.com/',
  tokenSigningAlg: 'HS256',
});
