const fetch       = require('node-fetch');
const API_URL	  = 'https://data.cityofnewyork.us/resource/4wtg-vt8c.json';

function findBeaches(req, res, next) {
  fetch(API_URL)
  .then(r => r.json())
  .then((result) => {
    res.beaches = result;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  })
}

module.exports = { findBeaches };

