'use scrict';

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf-8', function (err, data) {
			response.write(data);
		});
		response.end();
	} else {
		fs.readFile('./images/404.jpg', function (err, data) {
			response.write('<img src="./images/404.jpg" alt="Wrong address!">');
		})
		response.end();
	}
})
server.listen(8080);
/*server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/hello') {
		response.write('<h1>Hello world!</h1>');
		response.end();
	} else {
		response.statusCode = 404;
		response.write('<h1>404: Zła ścieżka!</h1>');
		response.end();
	};
})
*/
