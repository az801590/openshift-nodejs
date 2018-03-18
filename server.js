const http=require("http");
const express=require("express");
const bodyParser=require("body-parser");
const jieba=require("nodejieba");

var app=express();

//var port=process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
//var ip=process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0";

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
app.listen(8080);

//http.createServer(app).listen(port, ip);

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
