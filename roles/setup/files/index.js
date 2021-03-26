var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Wazzup JLDROID25 Site Reliability Engineer");
});
server.listen(3000);