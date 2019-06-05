var express = require("express");

var router = express.Router();

router.get('/',(req,res)=>{
<<<<<<< HEAD
    res.render('vCategories/all');
});

router.get('/all',(req,res)=>{
    res.render('vCategories/all');
=======
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
>>>>>>> acb69ad18e937645abafd416206a9736ab49a056
});

module.exports = router;