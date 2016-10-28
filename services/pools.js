const fetch       = require('node-fetch');
// Bobby showed me this dependency to convert an xml to a json
const parseString = require('xml2js').parseString;
const API_URL	  = 'https://www.nycgovparks.org/bigapps/DPR_Pools_indoor_001.xml';
// const API_URL     = 'http://www.nycgovparks.org/bigapps/desc/DPR_Pools_indoor_001.txt'
function findPools(req, res, next) {
	fetch(API_URL, {
		headers: "content-Type: text/xml" 
	})
	// .then(response => {
	// 	// console.log(response);
	// 	response.text()
	// })
	.then((data) => {
		console.log(data)
		parseString(data, (err, result) => {
			// if (err) throw err;
			console.log(result)
		// res.pools = data;
      next();
    });
  });
}

module.exports = { findPools };

