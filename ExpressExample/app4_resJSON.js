var express = require('express'),
    http = require('http');

var app = express();

app.use(function(req,res,next){ 
    console.log('첫번째 미들웨어, 요청 처리함');
    res.send({name:'sosi',age:20}); // JSON데이터 전송기능
});

app.use(function(req,res,next){
    console.log('두번째 미들웨어, 요청 처리');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'}); 
    res.end('<h1>Express 서버에서' + req.user + '가 응답한 결과</h1>');
});

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});

