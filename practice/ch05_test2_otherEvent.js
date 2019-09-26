var http = require('http');
var server = http.createServer();
var port = 3000;

server.listen(port, function(){
    console.log("WebServer Starting : %d", port);
});

// client connection Event processing
//// Q-1. socket??
server.on('connection', function(socket){ // socket객체(클라이언트연결정보를 가짐)가 파라미터로 전달
    var addr = socket.address(); // 클라이언트의 IP와 포트정보확인가능
    console.log('Access the client : %s %d', addr.address, addr.port);
});

// Event Processing client request
// ch05_03 request event's callback function
server.on('request',function(req,res){ // on메서드는 이벤트처리의 기본 메소드, res객체이용 콜백함수는 클라이언트에게 응답
    console.log('enter the client"s Request');
    
    // res객체의 writeHead(응답보낼헤더생성함),write(응답본문데이터생성,다수호출가능),end(cli로 응답전송, 파라미터에 데이터 있으면 이 데이터 포함하여 응답 전송)메소드를 사용하면 클라이언트에게 응답전달가능
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
    res.end(); // end메서드호출시 cli에게 응답을 전송. 응답 완료
});

//서버 종료 이벤트 처리
server.on('close', function(){
    console.log('Termination the server');
});