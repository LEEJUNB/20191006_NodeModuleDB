// use()메서드를 사용하여 미들웨어를 설정하는 방법

/*
미들웨어나 라우터는 하나의 독립된 기능을 가진 함수
익스프레스에선 웹 요청과 응답에 관한 정보를 사용하여 필요한 처리를 진행하도록 독립된 함수로 분리하는데 이렇게 분리한 각각의 것들을 미들웨어라 한다.
각 미들웨어를 next()메소드를 호출하여 다음 미들웨어가 처리하도록 순서를 넘긴다.
라우팅 : 라우터는 클라이언트의 요청패스를 보고 이 요청 정보를 처리할 수 있는 곳으로 기능을 전달해주는 역할. 클라이언트의 요청패스따라 담당함수로 분리시킴
*/

var express = require('express'),
    http = require('http');

var app = express();

/*
use메서드를 호출하여 미들웨어를 등록하고 등록 순서따라 클라이언트 요청 처리
end메서드를 호출하여 응답보내면 처리과정은 완전히 끝
현재는 미들웨어가 하나이므로 이 미들웨어에서 클라이언트로 응답
*/
app.use(function(req,res,next){
    console.log('첫 번째 미들웨어에서 요청 처리');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버에서 응답한 결과</h1>'); // end메소드를 호출하여 응답하면 처리 과정은 완전히 끝
});

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});

