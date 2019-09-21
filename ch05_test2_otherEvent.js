var http = require('http');
var server = http.createServer();
var port = 3000;

server.listen(port, function(){
    console.log("WebServer Starting : %d", port);
});

// client connection Event processing
//// Q-1. socket??
server.on('connection', function(socket){
    var addr = socket.address();
    console.log('Access the client : %s %d', addr.address, addr.port);
});

// Event Processing client request
// ch05_04 request event's callback function
server.on('request',function(req,res){
    console.log('enter the client"s Request');
    
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write("<title>응답페이지</title>");
    res.write(" </head>");
    res.write("  <body>");
    res.write("   <h1>this is the res page from node.js</h1>")
    res.write("  </body>");
    res.write("</html>");
    res.end();
});

server.on('close', function(){
    console.log('Termination the server');
});