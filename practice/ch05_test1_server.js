// 웹 서버는 클라이언트에서 HTTP 프로토콜로 요청한 정보를 처리한 후 응답을 보내 주는 역할

var http = require('http'); // 웹 서버 객체 생성시 필요한 http모듈

var server = http.createServer(); // 웹 서버 객체 생성. createServer()메서드 호출시 서버 객체 반환하므로 이를 통해 웹 서버 객체 상성
var port = 3000; // 웹 서버를 시작하여 3000번 포트에서 대기

server.listen(port, function() { // listen()메소드를 호출하여 특정 포트에서 대기하도록 설정
    console.log('Starting ebServer, : %d', port);
}); 