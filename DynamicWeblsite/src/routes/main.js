const express=require("express");
const {route} = require('express/lib/application')
const Detail =require("../models/Detail");
const Slider = require("../models/slider")
const Service=require("../models/service")
const Contact=require("../models/contact")
const routes=express.Router();

routes.get("/",async (req,res)=>{
    const details=await Detail.findOne({"_id":"64256b3cf84660c9d4a20ab6"})
    const slides = await Slider.find();
    const services = await Service.find();
    res.render("index",{details:details,slides:slides,services:services});
})
routes.get("/gallery", async (req,res)=>{
    const details=await Detail.findOne({"_id":"64256b3cf84660c9d4a20ab6"})
    console.log(details);
    res.render("gallery",{details:details});
})

// process contact form
routes.post("/process-contact-form", async (req,res)=>{
try{
    const data = await Contact.create(req.body);
    res.redirect("/")
}
catch(error){
    res.redirect("/")
}
})


module.exports=routes;