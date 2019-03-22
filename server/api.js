//Dependencies

const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

//Authentication Middleware

module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://bajracharyapujan.auth0.com/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: "RS256"
  });

  // Api Routes

  // GET API root
  app.get("/api/", (req, res) => {
    res.send("API works");
  });
};
