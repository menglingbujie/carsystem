var express = require('express');
var carlist = require("../public/json/carlist.json");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json({ 'title': 'Express' });
  res.render("index");
  res.end();
});

router.get("/carlist",function(req,res,next){
  res.json(carlist);
  res.end();
})

module.exports = router;
