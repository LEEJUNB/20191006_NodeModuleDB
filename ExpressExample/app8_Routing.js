```
요청 라우팅하기
다른 요청이 들어왔을 떄도 use()메소드로 설정한 미들웨어 함수가 항상 호출되어 요청url을 하나하나확인해야 하는 번거로움 발생
이 문제를 해결하는 것이 router middleware
router middleware는 익스프레스에 포함
라우터를 사용, 사용자가 요청 기능이 무엇인지 패스를 기준으로 구별함
router middleware를 사용하려면 익스프레스 객체에서 라우터 객체를 참조
라우팅 함수를 등록하면 app객체에 설정
```
var express = require('express'),
    http = require('http'),
    path = require('path');

// 익스프레스의 미들웨어 불러오기
var bodyParser = require('body-parser'),
    static = require('serve-static');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

var router = express.Router(); // 라우터 객체 참조

// app8.js에서 추가된 코드
// 라우팅 함수 등록
// route()메소드로 요청 패스 지정, get 혹은 post메소드로 호출시 실핼될 함수 등록가능
router.route('/process/login').post(function(req,res){ // 클라이언트에서 특정패스로 get방식요청시 get메소드로 함수 등록, post방식은 post메서드로 함수 등록
    console.log('/process/login 처리');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead();
    res.write();
    res.write();
    res.write();
    res.write();
    res.end();
});

app.use('/', router); // 라우터 객체를 app 객체에 등록

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});

// http://localhost:3000/?name=mike로 접속할 것
