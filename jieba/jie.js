const nodejieba=require("nodejieba");

nodejieba.load(
	{
		//userDict: './dic/userdict.utf8'
		//userDict: "./dic/dic.txt"
		userDict: __dirname+"/dic/dict.txt.big"
	}
);



function Tag(string)
{
	let promise=new Promise(function(resolve, reject)
		{
			resolve(nodejieba.tag(string));
		}
	);
	return promise;
}

module.exports={Tag};
