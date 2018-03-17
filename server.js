const http = require("http");

var port=process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip=process.env.IP || process.nv.OPENSHIFT_NODEJS_IP || "127.0.0.1";

http.createServer(function(req, res)
	{
		res.writeHead(200, {"Content-Type":"text/plain"});
		res.write("Hello");
		res.end();
	}
).listen(port, ip);

