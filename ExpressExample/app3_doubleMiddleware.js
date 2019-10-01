var express = require('express'),
    http = require('http');

var app = express();

/*
클라이언트에서 요청이 들어오면 미들웨어함수는 순서대로 실행됨use메서드를 호출하여 미들웨어를 등록하고 등록 순서따라 클라이언트 요청 처리
각 미들웨어는 next()메소드를 호출하여 그다음 미들웨어가 처리하도록 순서를 넘김
end메서드를 호출하여 응답보내면 처리과정은 완전히 끝
미들웨어 내부적으로 req,res객체를 파라미터로 전달받아 사용가능
미들웨어함수를 호출한 app객체도 참조할수있게 req객체 속성으로 app객체 포함됨. 즉, req.app통해 app객체 참조사용가능
*/

app.use(function(req,res,next){ // 파라미터로 전달되는 요청객체,응답객체,next함수객체(다음 미들웨어로 전달시킴))
    console.log('첫번째 미들웨어, 요청 처리함');
    req.user = 'mike'; // req(요청))객체에 user속성추가 후 문자열값 넣음. 사용자 정보(mike) 설정
    next(); // next()메서드를 호출하여 다음 미들웨어에게 처리순서넘김
});

app.use(function(req,res,next){
    console.log('두번째 미들웨어, 요청 처리');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'}); // res(응답)객체
    res.end('<h1>Express 서버에서' + req.user + '가 응답한 결과</h1>'); // req.user은 첫번째 미들웨어의 속성
});

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});

