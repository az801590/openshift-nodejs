const express=require("express");
const bodyParser=require("body-parser");
const jieba=require("nodejieba");

var app=express();

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


//set port
app.listen(8888, function()
	{
		console.log("Start");
	}
);

//set nodejieba
jieba.load(
	{
  		//userDict: './dic/userdict.utf8'
		//userDict: "./dic/dic.txt"
		userDict: "./dic/dict.txt.big"
	}
);

//post:jieba
app.post("/jieba", function(req, res)
	{
		var result=jieba.tag(req.body.string);

		res.send(result);
	}
);
