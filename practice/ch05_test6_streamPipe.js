var http = require('http');
var fs = require('fs');
var server = http.createServer();
var port = 3000;

server.listen(port, function(){
    console.log("WebServer Starting : %d", port);
});

// client connection Event processing
server.on('connection', function(socket){
    var addr = socket.address();
    console.log('Access the client : %s %d', addr.address, addr.port);
});

// Event Processing client request
server.on('request',function(req,res){
    console.log('클라이언트 요청이 들어옴');

    var filename = 'house.png';
    var infile = fs.createReadStream(filename, {flags:'r'});

    // pipe() method를 이용한 연결, 자동 처리 설정
    infile.pipe(res);
});

server.on('close', function(){
    console.log('Termination the server');
});