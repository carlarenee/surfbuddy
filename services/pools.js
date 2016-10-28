const fetch       = require('node-fetch');
// Bobby showed me this dependency to convert an xml to a json
const parseString = require('xml2js').parseString;
const API_URL	  = 'https://data.cityofnewyork.us/Recreation/Directory-of-Indoor-Swimming-Pools/x57r-az25';

function findPools(req, res, next) {
	fetch(API_URL)
	.then(response => response.text())
	.then((data) => {
		console.log(data);
		parseString(data, (err, result) => {
			if (err) throw err;
		res.pools = pools;
      next();
    });
  });
}

module.exports = { findPools };

