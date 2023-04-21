const express=require("express");
const hbs=require("hbs");
const mongoose =require("mongoose");
const app=express();
const routes=require('./routes/main')
const Detail = require("./models/Detail");
const Slider = require("./models/slider");
const Service =require("./models/service")
const bodyParser=require("body-parser")
app.use('/static',express.static("public"));
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('',routes)

//template engine
app.set('view engine','hbs');
app.set("views","views");

hbs.registerPartials("views/partials")


//db connection
//mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/website_tut").then(()=>{
    console.log("DB Connected")

//     Detail.create({
//         brandName:"Info Techniacal Solution",
//         brandIconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniHcg-ZfUO1I0UYa6jEZibdK2z7lGftgTpQ&usqp=CAU",
//         links:[{
//             label:"Home",  
//             url:"/"
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact Us",
//             url:"/contact-us"
//         }
//     ]
// })
// console.log("Document saved")
// Slider.create({
//     title:"Learn Java In very easy manner.",
//     subTitle:"Java is one of the most popular programming language",
//     imageUrl:"/static/images/pic1.jpg",
//     class:'active'
// },
// {
//     title:"Django jakdfnk.",
//     subTitle:"Django a is one of the most popular framework ",
//     imageUrl:"/static/images/pic2.jpg",
//     class:""
// },
// {
//     title:"Learn NodeJs.",
//     subTitle:"Node js is one of the most popular framework of backend",
//     imageUrl:"/static/images/pic3.jpg",
//     class:""
// }
// )
// Service.create([
//     {
//         icon:"fab fa-accusoft",
//         title:"Provide Best Courses",
//         description:"We provide couses that helps our students in learning and in placement.",
//         linkText:"https://www.learncodewithdurgesh.com",
//         link:"Check"
//     },
//     {
//         icon:"fab fa-affiliatetheme",
//         title:"Learn Projects",
//         description:"We provide couses that helps our students in learning and in placement.",
//         linkText:"https://www.learncodewithdurgesh.com",
//         link:"Learn"
//     },
//     {
//         icon:"fab fa-affiliatetheme",
//         title:"Provide Best Courses",
//         description:"We provide couses that helps our students in learning and in placement.",
//         linkText:"https://www.learncodewithdurgesh.com",
//         link:"Learn"
//     }
// ])
}).catch((err)=>{
        console.log("error is --> "+err);
})


app.listen(process.env.PORT | 5556,()=>{
    console.log("Server Started");


})