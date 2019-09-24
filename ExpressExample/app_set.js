var express = require('express'),
    http = require('http'); // express모듈은 http모듈위에서 동작하기에 http모듈도 불러옴

// express 객체 생성
var app = express(); /// express함수호출하여 객체에 저장

// 7~17행 : set메소드로 속성을 설정하는 방법
// 기본 포트를 app객체에 속성으로 설정
app.set('port', process.env.PORT || 3000); // set속성으로 익스프레스 서버 설정 및 app객체에 정의된 함수 호출, env는 서버모드설정, port속성은 웹 서버포트지정시사용

```
Start Express server
createServer메서드는 웹서버객체생성
listen메소드는 클라이언트 요청대기, 웹서버실행역할
app.get('port')는 포트속성을 꺼내서 파라미터로 전달
```
http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스 서버를 시작했습니다. : ' + app.get('port'));
});
```
그러나 실행시켜도 응답이없음
미들웨어가 없으면 localhost:3000으로 접속해도 응답없기 때문
use()메서드를 이용하여 미들웨어를 설정하여 응답하도록 만들자
```