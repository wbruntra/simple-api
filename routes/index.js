var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ msg: 'Hello world' });
});

router.post('/', function(req,res) {
  console.log(req.body);
  res.json({msg: 'you sent a message'});
});

module.exports = router;
