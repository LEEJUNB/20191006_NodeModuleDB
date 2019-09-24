var express = require('express'),
    http = require('http');

var app = express();

app.use(function(req,res,next){ 
    console.log('첫번째 미들웨어, 요청 처리함');
    
    var userAgent = req.header('User-Agnet'); // cli가 req할때 전달되는 헤더 값
    var paramName = req.query.name; // 요청파라미터(쿼리스트링)중 name의 값을 확인
    //cli에서 get방식으로 요청한 요청 파라미터(쿼리스트링_문자열로 전달함)들은 요청 객체(req)의 query객체 안에 들어간다
    //cli가 주소 문자열에 포함시켜 전달하는 쿼리스트링.
    res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8'});
    res.write('<h1>Expree server response result</h1>');
    res.write('<div><p>User-Agent:'+userAgent+'</p></div>');
    res.write('<div>{p>Param name : ' + paramName + '</p></div>');
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
