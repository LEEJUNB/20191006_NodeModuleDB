var express = require('express'),
    http = require('http');

var app = express();

app.use(function(req,res,next){ 
    console.log('첫번째 미들웨어, 요청 처리함');
    res.redirect('http://google.co.kr');//다른페이지로이동가능, 또한 URL주소뿐만 아니라 폴더 안의 다른 페이지를 보여줄 수 있음
});

app.use(function(req,res,next){
    console.log('두번째 미들웨어, 요청 처리');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'}); 
    res.end('<h1>Express 서버에서 응답한 결과</h1>');
});

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});

