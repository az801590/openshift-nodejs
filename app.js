const express=require("express");
const bodyParser=require("body-parser");

const jieba=require("./routes/jieba");

const app=express();


//body-parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded(
	{
		extended:false
	}
));

//body-parser application/json
app.use(bodyParser.json());

//set default dir
app.use(express.static(__dirname+"/public"));

app.use("/jieba", jieba);

module.exports=app;
