const http = require('http');

http.createServer(function (req, res) {
	res.write("I cant believe Im here! Love You Kier :)");
	res.end();
}
).listen(3000);

console.log("Server started on port 3000");
