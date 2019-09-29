const http = require('http');
/*
listen메서드 : 클라이언트에게 공개할 포트번호, 포트 연결 후 실행될 콜백함수 삽입
파일을 실행하면 서버는 8080포트에서 요청오길 대기함
res객체의 res.write메서드 : 첫인자는 클라이언트로 보낼 데이터, 여러개 전송가능
res객체의 res.end메서드 : 응답종료메서드. 인자있으면 클라이언트로 보내고 응답 종료
*/
```
http.createServer((req,res) => {
    res.write('<h1>Node!!!</h1>');
    res.end('<h1>Server!!</h1>');
}).listen(8080, () => {
    console.log('8080포트에서 대기 중');
});
```

// listen메서드에 콜백함수넣는대신 listening 이벤트 리스너도 가능
// 추가로 error 이벤트 리스너 추가
const server = http.createServer((req,res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
});
server.listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중!');
});
server.on('error', (error) => {
    console.error(error);
});