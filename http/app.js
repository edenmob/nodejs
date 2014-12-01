var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

// server is an EventEmitter ...
server.on('connection',function(stream){
	console.log('[connection event]');
	//console.log(stream);
});

console.log('Server running at http://127.0.0.1:1337/');