var http = require('http'); // 웹 서버 객체 생성시 필요한 http모듈

var server = http.createServer(); // 웹 서버 객체 생성. createServer()메서드 호출시 서버 객체 반환
var port = 3000; // 웹 서버를 시작하여 3000번 포트에서 대기

server.listen(port, function() {
    console.log('Starting ebServer, : %d', port);
});