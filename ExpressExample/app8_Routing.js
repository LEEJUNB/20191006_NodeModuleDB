// ```
// <요청 라우팅하기>
// 다른 요청이 들어왔을 떄도 use()메소드로 설정한 미들웨어 함수가 항상 호출되어 요청url을 하나하나확인해야 하는 번거로움 발생
// 이 문제를 해결하는 것이 router middleware
// router middleware는 익스프레스에 포함
// 라우터를 사용, 사용자가 요청 기능이 무엇인지 패스를 기준으로 구별함
// router middleware를 사용하려면 익스프레스 객체에서 라우터 객체를 참조
// 라우팅 함수를 등록하면 app객체에 설정
// ```

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

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());                                                                           
app.use(static(path.join(__dirname, 'public')));

// app8.js에서 추가된 코드
var router = express.Router(); // 라우터 객체 참조
// 라우팅 함수 등록
// route()메소드로 요청 패스 지정, get 혹은 post메소드로 호출시 실핼될 함수 등록가능
router.route('/process/login').post(function(req,res){ // 클라이언트에서 특정패스로 get방식요청시 get메소드로 함수 등록, post방식은 post메서드로 함수 등록
    console.log('/process/login 처리');
    
    // 사용자요청을 처리하는 미들웨어 안에서 요청 객체의 bodu객체 안에 요청 파라미터가 들어감
    // 다음 코드를 사용해 요청 파라미터를 참조함
    var paramId = req.body.id || req.query.id; 
 
    // 클라이언트에서 get,post방식 중 어떤 방식으로 요청할지를 고려하기 위해 두가지 요청 파라미터를 모두 검사
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
    res.write('<h1>Expree server response result</h1>');
    res.write('<div><p>Param id:'+paramId+'</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write("<br></br><a href='/public/login2.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

app.use('/', router); // 라우터 객체를 app 객체에 등록

app.use(function(req,res,next){
    console.log('두번째 미들웨어, 요청 처리');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'}); 
    res.end('<h1>Express 서버에서 응답한 결과</h1>');
});

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});

// http://localhost:3000/?name=mike로 접속할 것
