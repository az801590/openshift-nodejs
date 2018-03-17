const http = require("http");

var port=8080;
var ip="127.0.0.1";

http.createServer(function(req, res)
	{
		res.writeHead(200, {"Content-Type":"text/plain"});
		res.write("Hello");
		res.end();
	}
).listen(port, ip);

