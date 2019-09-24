var http = require('http');

var options = {
    host : 'www.google.com',
    port : 80,
    path : '/'
};

// get 메소드는 타 사이트에 요청보내고 응답받아 처리 가능
// 응답 데이터를 받을 떄는 data, end이벤트로처리
var req = http.get(options, function(res){
    // 응답 처리
    var resData = '';
    res.on('data',function(chunk){ // 데이터를 받고 있음 == data 이벤트
        resData += chunk; // resData변수에 받은 데이터를 모두 저장
    });

    res.on('end', function(){ // end이벤트 처리시 응답데이터를 모두 받아 변수 resdata를 출력
        console.log(resData);
    });
});

req.on('error', function(err){
    console.log("오류발생 : " + err.message); // err.message
});
