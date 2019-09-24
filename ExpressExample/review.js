var express = require("express"),
    http = require('http');

var app = express();

app.use(function(req,res,next){
    console.log()
    req.user = 'mike';
    next();
});

app.use(function(req,res,next){
    console.log("두번쨰 미들웨어, 요청처리");
    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express'+req.user+'가 응답한 결과 </h1>');
});

http.createServer(app).listen(3000,function(){
    console.log('Express서버가 3000번 포트에서 시작');
});