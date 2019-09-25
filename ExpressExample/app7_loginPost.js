var express = require('express'),
    http = require('http'),
    path = require*('path');

// 익스프레스의 미들웨어 불러오기
var bodyParser = require('body-parser'),
    static = require('server-static');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// 일반적인 요청 파라미터 형식
// body-parser를 사용하여 application/x-www-form-urlencoded형식으로 전달된 요청 파라미터를 파싱
app.use(bodyParser.urlencoded({extended : false}));

// body-parser를 사용해 application/json형식으로 전달된 요청 파라미터를 파싱
app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

// 미들웨어에서 파라미터 확인
app.use(function(req,res,next){ 
    console.log('첫번째 미들웨어, 요청 처리함');
    
    // 사용자요청을 처리하는 미들웨어 안에서 요청 객체의 bodu객체 안에 요청 파라미터가 들어감
    // 다음 코드를 사용해 요청 파라미터를 참조함
    var paramId = req.body.id || req.query.id; 
 
    // 클라이언트에서 get,post방식 중 어떤 방식으로 요청할지를 고려하기 위해 두가지 요청 파라미터를 모두 검사
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
    res.write('<h1>Expree server response result</h1>');
    res.write('<div><p>Param id:'+paramId+'</p></div>');
    res.write('<div>{p>Param password : ' + paramPassword + '</p></div>');
    res.end();
});

app.use(function(req,res,next){
    console.log('두번째 미들웨어, 요청 처리');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'}); 
    res.end('<h1>Express 서버에서 응답한 결과</h1>');
});

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});

// http://localhost:3000/?name=mike로 접속
