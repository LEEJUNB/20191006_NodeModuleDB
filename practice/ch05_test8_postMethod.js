// POST 방식으로 요청하는 경우


var http = require('http');

var opts = {
    host : 'www.google.com',
    port : 80,
    method : 'POST', // 추가
    path : '/',
    header : {} // 추가
};

var resData = '';
// Get방식으로 요청할 떄는 http.get이었으나
// POST방식으로 요청할 때는 http.request메소드를 사용. 이 메서드는 요청을 보낼 때 요청 헤더, 본문을 직접 설정해야한다.
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
req.data = "q=actor"; // 사이트에 요청할 떄 필요한 요청 파라미터는 요청 객체의 data속성으로 설정. 이 속성값따라 Content-Length헤더값이 달라짐. 
opts.headers['Content-Length'] = req.data.length;

req.on('error', function(err){
    console.log("오류발생 : " + err.message); // err.message
});

// 요청 전송
req.write(req.data); // 요청할때는 write()메소드로 요청 본문 데이터를 req객체에 쓰고
req.end(); // end메소드로 전송

//TypeError: Cannot set property 'Content-Type' of undefined