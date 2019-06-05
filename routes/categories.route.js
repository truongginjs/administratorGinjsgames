var express = require("express");

var router = express.Router();

router.get('/',(req,res)=>{
    var active=[false,false,false,false,false];
    active[2]=true;
    res.render('vCategories/all',{
        x: active
    });
});

router.get('/all',(req,res)=>{
    var active=[false,false,false,false,false];
    active[2]=true;
    res.render('vCategories/all',{
       X: active
    });
});

module.exports = router;