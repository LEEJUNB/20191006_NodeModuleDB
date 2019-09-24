var express = require('express'),
    http = require('http');

var app = express();

```
use메서드를 호출하여 미들웨어를 등록하고 등록 순서따라 클라이언트 요청 처리
end메서드를 호출하여 응답보내면 처리과정은 완전히 끝
현재는 미들웨어가 하나이므로 이 미들웨어에서 클라이언트로 응답
```
app.use(function(req,res,next){
    console.log('첫 번째 미들웨어에서 요청 처리');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버에서 응답한 결과</h1>'); // end메소드를 호출하여 응답하면 처리 과정은 완전히 끝
});

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});

