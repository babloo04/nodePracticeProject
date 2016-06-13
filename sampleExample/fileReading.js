/**
 * Created by apancholi on 10-06-2016.
 */
var server = require("http");
var fileSuppoert = require("fs");

var reqHandler = function(req, res){
    res.writeHead("200",{'Content-Type': 'application/xml'});

    var data = fileSuppoert.readFileSync("../extraFile/sampleText.txt");
    res.write("<root><text>" + data.toString() + "</text></root>");

    res.end();
    console.log("server Started");
};
server.createServer(reqHandler).listen(8181);

console.log("server is started")