var http = require("http");
var PORT = 7000;
var PORT2 = 7500;
function handlerRequest(request,response) {
    response.end("something good about yourself" + request.url)
}

var server = http.createServer(handlerRequest);
var server2 = http.createServer(handlerRequest);
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})

server2.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2);
})