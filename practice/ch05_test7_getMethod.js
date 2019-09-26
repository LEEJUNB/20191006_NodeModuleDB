var http = require('http');

var options = {
    host : 'www.google.com',
    port : 80,
    path : '/'
};

// get 메소드를 통해 타 사이트에 요청보내고 응답받아 처리 가능
// 응답 데이터를 받을 떄는 data, end이벤트로처리
var req = http.get(options, function(res){ // option객체는 타 사이트의 정보를 담고 있는 객체
    // 응답 처리
    // 응답을 받을 때는 data이벤트와 end이벤트로 처리한다.
    var resData = '';
    res.on('data',function(chunk){ // 다른 서버로 부터 응답 받을 때 data이벤트 발생. 이 이벤트는 한 번 혹은 여러번 발생. data이벤트는 데이터를 받고 있는 상태 이때 받은 데이터를 모두 resData변수에 담아 둔다
        resData += chunk; // resData변수에 받은 데이터를 모두 저장
    });

    res.on('end', function(){ // 데이터 수신이 완료되면 end이벤트 발생. end이벤트 처리시 응답데이터를 모두 받은 뒤,
        console.log(resData); // 변수 resdata를 출력할 수 있다
    });
});

req.on('error', function(err){
    console.log("오류발생 : " + err.message); // err.message
});
