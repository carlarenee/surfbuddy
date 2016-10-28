const router = require('express').Router();
// const { findPools } = require('../services/pools');
const { findBeaches } = require('../services/beaches');

router.get('/', findBeaches, (req, res) => {
  //console.log(res.data);
  console.log(res.beaches);
  res.render('index', {
  	beaches: res.beaches,
  	//pools: res.pools
  });
});

module.exports = router;

//findPools,