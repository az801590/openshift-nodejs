const express=require("express");
const jieba=require(__dirname+"/../jieba/jie");
const router=express.Router();

router.post("/", async function(req, res)
	{
		try
		{
			let result=await jieba.Tag(req.body.string);
			res.send(result);
		}
		catch(err)
		{
			console.log(err);
		}
	}
);

module.exports=router;
