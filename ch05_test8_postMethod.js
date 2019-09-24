var http = require('http');

var opts = {
    host : 'www.google.com',
    port : 80,
    method : 'POST', // 추가
    path : '/',
    header : {} // 추가
};

var resData = '';
var req = http.request(opts, function(res){ // request메서드로 만든 요청객체 opts
    // 응답 처리
    res.on('data',function(chunk){
        resData += chunk;
    });

    res.on('end',function(){
        console.log(chunk);
    });
});

opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data = "q=actor";
opts.headers['Content-Length'] = req.data.length;

req.on('error', function(err){
    console.log("오류발생 : " + err.message); // err.message
});

// 요청 전송
// 요청할때는 write()메소드로 요청 본문 데이터를 req객체에 씀
req.write(req.data);
req.end();

//TypeError: Cannot set property 'Content-Type' of undefined