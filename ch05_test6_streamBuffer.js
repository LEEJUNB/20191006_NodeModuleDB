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
    var filelength = 0;
    var curlength = 0;

    fs.stat(filename, function(err,stats) {
        filelength = stats.size; //// Q-0. stats???
    });

    // write Head
    res.writeHead(200, {"Content-Type":"image/png"});

    // 파일 내용을 스트림에서 읽어 본문 쓰기
    infile.on('readable', function(){
        var chunk;
        while (null !== (chunk = infile.read())) {
            console.log('읽어 들인 데이터 크기 : %d 바이트', chunk.length);
            curlength += chunk.length;
            res.write(chunk,'utf-8', function(err) { // 이 콜백함수는 쓰기 완료 시점확인하기 위한 용도이다
                console.log('파일 부분 쓰기 완료 : %d, 파일 크기 : %d', curlength, filelength );
                if(curlength >= filelength) { // 응답객체에 쓰느 작업이 모두완료되었다면!
                    // 응답 전송하기
                    res.end(); // end메소드를 호출하는 시점은 write()메소드가 종료된 시점이므로 write()메소드에 콜백함수를 전달하여 쓰기가 완료된 시점을 확인
                };
            });
        };
    });
});

server.on('close', function(){
    console.log('Termination the server');
});