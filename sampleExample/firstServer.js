var server = require("http");

var reqHandler = function(req, res){
	res.writeHead("200",{'Content-Type': 'application/xml'});
	res.write("<root><text>ankit</text></root>");

	res.end();
	console.log("server Started");
};
server.createServer(reqHandler).listen(8181);

console.log("server is started")