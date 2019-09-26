var http = require('http'); // 서버모듈
var fs = require('fs'); // FileSystem 접근 모듈
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
    console.log('enter the client"s Request');
    
    var filename = 'house.png';
    fs.readFile(filename, function(err,data){ // 클라이언트 요청시 readFile메소드가 filename을 읽음. 콜백함수에서 파일을 모두읽으면 data객체로 파일내용전달
        res.writeHead(200, {"Content-Type":"image/png"}); // Content-Type이란 헤더값으로 데이터가 이미지임을 표시
        res.write(data);// write메서드는 파일내용을 클라이언트에게 전달함
        res.end();
    });
});

server.on('close', function(){
    console.log('Termination the server');
});