var http =  require('http');

var server = http.createServer();

server.on('request', function (request, response) {
  console.log('received request');

  var body = "<html><head><title>Node HTTP Spike</title></head>" +
    "<body><p>This is a spike of Node's HTTP server.</p></body></html>";

  response.end(body);
});

server.listen(8085);

console.log('Server started');