// server2.html과의 연동

const http = require("http");
const fs = require('fs');

http.createServer((req,res) => {
    fs.readFile('./server2.html',(err,data) => { // 요청이 들어오면 fs모듈로 HTML파일 읽음. data변수에 저장된 버퍼(이전에는 문자열줬음)를 그대로 cli에게 줌
        if(err) {
            throw err;
        }
        res.end(data);
    });
}).listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중')
});