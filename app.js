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

const port=process.env.PORT;
app.listen(5000,()=>{
	console.log("Listining to port 5000");
})