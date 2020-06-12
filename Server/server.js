var express=require("express");
var bodyParser=require('body-parser');
var router=require("./routing/routing")
var mongoose=require("./mongoDb/mongoose");
var shema=require("./mongoDb/fitness.model");
var cors = require('cors')
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use("/", router);
app.listen(3000, ()=>{
    console.log("Server running with port number 3000.");
})