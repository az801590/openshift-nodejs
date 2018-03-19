const express=require("express");
const jieba=require(__dirname+"/../jieba/init")
const router=express.Router();

router.post("/", function(req, res)
	{
		let result=jieba.tag(req.body.string);
		res.send(result);
	}
);

module.exports=router;
