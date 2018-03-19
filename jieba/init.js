const jieba=require("nodejieba");

jieba.load(
	{
		//userDict: './dic/userdict.utf8'
		//userDict: "./dic/dic.txt"
		userDict: __dirname+"/dic/dict.txt.big";
	}
);

module.exports=jieba;
