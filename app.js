const express= require('express');
const path = require('path');
engine = require('ejs-mate');
const app=express();
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use( express.static( "public" ) );

app.get("/",(req,res)=>{
	res.render("templetes/home.ejs");
});

app.get("/aboutGCU",(req,res)=>{
	res.render("templetes/about.ejs");
})

app.get("/location",(req,res)=>{
	res.render("templetes/location.ejs");
})

// app.get("/*",(req,res)=>{
// 	res.render("/templete/default.ejs")
// })

const port=process.env.PORT || 5000;
app.listen(port,()=>{
	console.log("Listining to port 5000");
})