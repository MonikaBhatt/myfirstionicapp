var express = require('express');
var router = express.Router();
var URL="mongodb://mnu:2085monu@ds133192.mlab.com:33192/mona"
const db=require('monk')(URL)
const docs =db.get('monu')
/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });

  docs.insert({"name":"monku"},function(err,docs){
      if(err) console.log(err)
  else  res.send("hurrah");
  })
});
router.get('/wel', function(req, res, next) {
    res.send('ghg');
});


module.exports = router;
