var express = require("express");

var router = express.Router();

router.get('/',(req,res)=>{
    res.render('vCategories/all');
});

router.get('/all',(req,res)=>{
    res.render('vCategories/all');
});

module.exports = router;