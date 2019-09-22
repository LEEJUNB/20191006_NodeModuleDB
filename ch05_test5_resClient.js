var http = require('http');
var fs = require('fs');
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
// ch05_03 request event's callback function
server.on('request',function(req,res){
    console.log('enter the client"s Request');
    
    var filename = 'house.png';
    fs.readFile(filename, function(err,data){
        res.writeHead(200, {"Content-Type":"image/png"});
        res.write(data);
        res.end();
    });

});

server.on('close', function(){
    console.log('Termination the server');
});