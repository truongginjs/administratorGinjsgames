var express = require("express");

var router = express.Router();

router.get('/',(req,res)=>{
    res.render('vUser/all');
});

router.get('/all',(req,res)=>{
    res.render('vUser/all');
});

module.exports = router;