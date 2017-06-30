var express = require('express');
var router = express.Router();

var URL="mongodb://mnu:2085monu@ds133192.mlab.com:33192/mona"
const db=require('monk')(URL)
const docs =db.get('monu')
/* GET home page. */
router.get('/push', function(req, res, next) {
 // res.render('index', { title: 'Express' });

  docs.update({"id":"5e438", "name":"monika"},{$push:{"Group":{"name":"users1"}}},function(err,docs){
      if(err) console.log(err)
  else  res.send("hurrah");
  })
});
router.get('/welll', function(req, res, next) {
    // res.render('index', { title: 'Express' });

    docs.find({"age":"90"},function(err,docs){
        if(err) console.log(err)
        else  res.json(docs[0]);
    })
});
router.post('/welo', function(req, res, next) {
    var username=req.body.username;
    var pass=req.body.password;
    docs.insert({"username":username,"password":pass},function(err,docs){
        if(err) console.log(err);
        else
            res.send('successful');
    })
});
router.post('/location', function(req, res, next) {
    var latitude=req.body.lat;
    var longitude=req.body.lng;
    docs.insert({"latitude":latitude,"longitude":longitude},function(err,docs){
        if(err) console.log(err);
        else
            res.send('successful');
    })
});
router.get('/weli', function(req, res, next) {
    res.find('mahi');
});

router.get('/well', function(req, res, next) {
    res.send('Dhoni ka birthday aaya');
});
router.get('/pushl', function(req, res, next) {
    // res.render('index', { title: 'Express' });

    docs.update({"username":"mona", "password":"123"},{$push:{"Group":{"latitude":"latitude" }}},function(err,docs){
        if(err) console.log(err)
        else  res.send("hurrah");
    })
});

module.exports = router;
